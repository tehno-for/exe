'use strict';

require('dotenv').config();
const express = require('express');
const minifyHTML = require('express-minify-html-2');
const fetch = require('node-fetch');
const config = require('./config.json')[process.env.NODE_ENV || "dev"];
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const moment = require('moment');
const multer = require('multer');
const axios = require('axios');
const webp = require('webp-converter');

const {companyId, companyKey, wsUrl, appPort} = config;

const app = express();
app.disable('x-powered-by');
const http = require('http').createServer(app);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/tmp');
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Only .jpeg or .png files are accepted'), false);
    }
};

const upload = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter
});

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));
app.use('/.well-known', express.static('.well-known'));
app.use(cookieParser());

if (process.env.NODE_ENV!='dev') {
    app.use(minifyHTML({
        override: true,
        exception_url: false,
        htmlMinifier: {
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: false,
            removeAttributeQuotes: false,
            removeEmptyAttributes: false,
            minifyJS: true,
            minifyCSS: true,
            ignoreCustomFragments: [/{{[{]?(.*?)[}]?}}/],
            processScripts: ['text/template', 'application/ld+json']
        }
    }));
}

const urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

let mimeTypeExtensions = {
    "image/png": ".png",
    "image/jpeg": ".jpg"
}

/************************* System Methods (begin) *******************************/

const asyncRequest = async (servicePath, request) => {
    const headers = {
        "Content-Type": "application/json",
        "accept": "*/*",
        "cache-control":"no-cache"
    };
    const url = (process.argv[3] || wsUrl)+servicePath;
    const req = await fetch( url, { method: 'POST', headers: headers, body: JSON.stringify(request) } );
    const response = await req.json();
    if (response.error) {
        throw new Error(response.error);
    }
    return response;
};

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/************************** System Methods (end) ********************************/


/************************* Common methods (begin) *******************************/

app.get("/setLanguage/:lang", urlencodedParser, function (appReq, appRes) {

    appRes.cookie('lang', appReq.params.lang, {maxAge: 1000 * 60 * 60 * 24 * 15});

    if (appReq.headers.referer != null) {
        appRes.redirect(appReq.headers.referer);
    } else {
        appRes.redirect('/');
    }
});

app.get("/lang-:lang/:uri", urlencodedParser, function (appReq, appRes) {

    if (['az','en','ru'].indexOf(appReq.params.lang)>=0) {
        appRes.cookie('lang', appReq.params.lang, {maxAge: 1000 * 60 * 60 * 24 * 15});

        appRes.redirect(`/${appReq.params.uri}`);
    } else {
        appRes.redirect('/');
    }
});

app.post("/upload/:module/:entity", upload.single("file"), (appReq, appRes) => {

    const {sessionKey, objectType, objectId} = appReq.body;
    const {originalname, mimetype, path} = appReq.file;
    const imageFile = `/assets/images/${appReq.params.entity}/${originalname}`;
    const target = `${__dirname}${imageFile}`;
    const response = {data: {}, error: {}};

    if (!fs.existsSync(`${__dirname}/assets/images/${appReq.params.entity}`)) {
        fs.mkdirSync(`${__dirname}/assets/images/${appReq.params.entity}`);
    }

    axios.post(`${config.wsUrl}system/uploadImage`, {
        sessionKey, objectType, objectId, imageFile, imageType: mimetype
    }).then(({data}) => {
        if (data.data) {
            fs.copyFileSync(path, target);
            const targetWebp = target.replace(/\.[^/.]+$/, "") + '.webp';
            webp.cwebp(target, targetWebp,"-q 70",(status,error) => {});
            response.data = data.data;
        } else {
            response.error = data.error;
        }
    }).catch(err => {
        response.error = err;
    }).finally(()=>{
        fs.unlinkSync(path);

        appRes.send(response);
    });
});

app.post("/upload/images", upload.single("file"), (appReq, appRes) => {

    try {
        const {id} = appReq.body;
        const {originalname, mimetype, path} = appReq.file;
        const imageFile = `/assets/images/uploads/${moment(new Date()).format('YYYYMMDDHHmmss')}-${originalname}`;
        const target = `${__dirname}${imageFile}`;


        fs.copyFileSync(path, target);
        const targetWebp = target.replace(/\.[^/.]+$/, "") + '.webp';
        webp.cwebp(target, targetWebp, "-q 70", (status, error) => {
        });

        fs.unlinkSync(path);
        return appRes.send({data: {id, imageFile}});
    } catch (error) {
        return appRes.status(500).send({error})
    }
});

/************************* Common methods (end) *********************************/


/************************* Site methods (begin) *********************************/

const langChecker = (req, res, next) => {

    if (req.cookies['lang']==null) {
        req.cookies['lang'] = 'ru';
        res.cookie('lang', 'ru', {maxAge: 1000 * 60 * 60 * 24 * 15});
    }

    next();
}

const setParameters = async (req, res, next) => {

    const {page, id, url} = req.params;
    const {lang} = req.cookies;

    req.page = page;
    req.id = id;
    req.url = url;

    if (page === 'category') {
        req.categoryId = id;
    } else {
        const content = await axios.get(`${config.wsUrl}api/products/${page}/${id}/${lang}`)
            .then(({data}) => (data))
            .catch(error => (error));

        if (!content.data) {
            content.data= {};
            req.content = null;
            return res.status(404).render('404/index', {
                url: req.url
            });
        } else {
            req.content = {...content.data};
        }
        if (page === 'product') {
            req.categoryId = content.data.categoryId;
        }
    }

    next();
}

const pageGenerator = async (appReq, appRes) => {

    const lang = appReq.cookies['lang'];

    const request = {companyId, companyKey, lang};

    const initial = await asyncRequest('site/getInitialObjects', request)
        .then(res => (res))
        .catch(error => (error));

    if (!initial.data) {
        appRes.render("error/index", {...initial, lang});
    }

    const footerEntities = await asyncRequest('api/categories/footerEntities', request)
        .then(res => (res))
        .catch(error => (error));

    if (!footerEntities.data) {
        appRes.render("error/index", {...initial, lang});
    }

    const footerEntitiesData = footerEntities.data.map(entity => {
        entity.products = entity.products.filter(product => product.isActive);
        if (!entity.products) {
            entity.products = [];
        }
        return entity;
    });

    const allObjects = await asyncRequest('getDataJson', request)
        .then(res => (res))
        .catch(error => (error));

    if (!allObjects || !allObjects[0] || !allObjects[0].categories || !allObjects[0].categories[0] || !allObjects[0].categories[0].id) {
        return appRes.render("error/index", {error: {initial, allObjects}, lang});
    }

    const categoryId = appReq.categoryId ? appReq.categoryId : allObjects[0].categories[0].id;

    const objects = allObjects.map(object => {
        const categories = [...object.categories];
        let categoryFound = false;
        object.categories = categories.map(category => {
            if (category.id.toString() === categoryId.toString()) {
                categoryFound = true;
            } else {
                delete category.isActive;
            }
            return category;
        });
        if (!categoryFound) {
            delete object.isActive;
        } else {
            object.activeCategory = object.categories.find(obj=>(obj.isActive));
        }
        return object
    });

    const {content, page} = appReq;
    appRes.render('index/index', {
        ...initial, page, moment, content, footerEntities: footerEntitiesData, objects, lang
    });
}

app.get("/index.html", urlencodedParser, langChecker, (appReq, appRes) => {
    return pageGenerator(appReq, appRes);
});

app.get("/:page/:id-:url.html", urlencodedParser, langChecker, setParameters, (appReq, appRes) => {
    const lang = appReq.cookies['lang'];
    const {page, id, url} = appReq.params;

    if (['article', 'special', 'product', 'category'].indexOf(page) < 0) {
        return appRes.status(404).render('404/index', {
            url: appReq.url
        });
    }

    return pageGenerator(appReq, appRes);
});

app.get("/", urlencodedParser, (appReq, appRes) => {
    appRes.redirect("/index.html");
});

/************************* Site methods (end) ***********************************/

app.post('/ws/:service', urlencodedParser, async (appReq, appRes) => {
    const url = 'site/' + appReq.params.service;

    await asyncRequest(url, {...appReq.body.request, companyId, companyKey})
        .then(body => {appRes.send(body)})
        .catch(error => {appRes.send(error)});
});

app.get("/data.json", urlencodedParser, function (appReq, appRes) {
    if (appReq.cookies['lang']==null) {
        appReq.cookies['lang'] = 'ru';
        appRes.cookie('lang', 'ru', {maxAge: 1000 * 60 * 60 * 24 * 15});
    }
    asyncRequest('getDataJson', {lang: appReq.cookies.lang})
        .then(res => (appRes.send(res)))
        .catch(() => (appRes.send([])))

});

app.get("/techSupport.json", urlencodedParser, function (appReq, appRes) {
    if (appReq.cookies['lang']==null) {
        appReq.cookies['lang'] = 'ru';
        appRes.cookie('lang', 'ru', {maxAge: 1000 * 60 * 60 * 24 * 15});
    }
    asyncRequest(`api/categories/getTechSupport?lang=${appReq.cookies.lang}`, {lang: appReq.cookies.lang})
        .then(res => (appRes.send(res)))
        .catch(() => (appRes.send([])))

});

app.get("*", urlencodedParser, function (appReq, appRes) {
    appRes.status(404)
        .render('404/index', {
            url: appReq.url
        });
});

http.listen(process.argv[2] || appPort, "0.0.0.0", function(){
    console.log(process.argv[2] || appPort)
});

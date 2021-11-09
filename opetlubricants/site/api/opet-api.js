'use strict';

const express = require('express');
require('dotenv').config();
const config = require('./config.json')[process.env.NODE_ENV || "dev"];
const mysql = require('mysql');
const sqls = require('./modules/sqls');
const db = require('./models');

const {companies, mysqlParams, wsPort} = config;

const app = express();
app.use(express.json());

app.set('trust proxy', true);

const mysqlPool = mysql.createPool({
    connectionLimit: mysqlParams.limit,
    host: mysqlParams.host,
    user: mysqlParams.user,
    password: mysqlParams.password,
    database: mysqlParams.database,
    charset : 'utf8mb4'
});

mysqlPool.on('connection', conn => {
    conn.query("SET time_zone='+04:00';", error => {
        if (error) {
            console.error(new Date(), error);
        }
    });
});

const evalMysqlError = (error) => {
    console.error(new Date(), error);
    return {
        error: {
            code: -error.errno,
            message: error.code,
            details: error.sqlMessage,
            sessionKey: error.sessionKey
        }
    };
};

const executeQuery = (sqlQuery, sqlParams) => {
    return new Promise((resolve, reject) => {
        mysqlPool.query(sqlQuery, sqlParams, function (mqErr, mqRes) {
            if (mqErr) {
                reject(evalMysqlError(mqErr));
            } else {
                resolve(mqRes);
            }
        });
    });
};

const checkCompany = (companyId, companyKey) => {
    const company = companies.filter(company => {
        return (company.id === companyId && company.key === companyKey);
    });

    return new Promise((resolve, reject) => {
       if (company.length > 0) {
           resolve(company);
       } else {
           reject({error: {message:"ACCESS_DENIED"}});
       }
    });
};

const convertCompositesToArray = (obj, composites) => {
    //avoid mutation, work with new Object
    const newObj = {...obj};

    //iterate composites
    for (const composite of composites) {
        //declaring headers and decomposing new field
        const compositeHeader = composite + 'Header';
        const newField = 'arr' + composite.substr(3);
        newObj[newField] = [];

        //check if composite field is not empty and headers exists
        if (newObj[composite] && newObj[compositeHeader]) {

            //splitting composite and headers
            const rawComposites = newObj[composite].split('&&');
            const rawCompositeHeaders = newObj[compositeHeader].split('||');

            //converting and adding new child
            for (const rawComposite of rawComposites) {
                const fields = rawComposite.split('||');
                const compositeObj = {};
                for (let i = 0; i < fields.length; i++) {
                    compositeObj[rawCompositeHeaders[i]] = fields[i];
                }
                newObj[newField].push(compositeObj);
            }
        }

        //deleting unnecessary raw fields
        delete newObj[composite];
        delete newObj[compositeHeader];
    }
    return newObj;
};

const runApi = (apiRes, sql, params,
                {type, composites} = {type: 'row', composites: []}) => {

    //dummy response
    const response = {data: {}, error: {}};

    //trying to execute db query
    executeQuery(sql, params)
        .then(res => {
            //no need error
            delete response.error;

            //expecting array?
            const isArray = type === 'array';

            //setting data
            const data = isArray ? res[0] : res[0][0];

            //decomposing raw composite fields
            if (composites && composites.length > 0) {
                if (isArray) {
                    response.data = [];
                    for (const item of data) {
                        response.data.push(convertCompositesToArray(item, composites));
                    }
                } else {
                    response.data = convertCompositesToArray(data, composites);
                }
            } else {
                //no composite fields, returns data
                response.data = data;
            }
        })
        .catch(err => {
            delete response.data;
            response.error = err.error ? err.error : err;
        })
        .finally(() => {
            //send json to client
            apiRes.send(response);
        });
};

const checkSession = sessionKey => {
    return new Promise((resolve, reject) => {
        executeQuery(sqls.system.getUserInfoBySession, [sessionKey])
            .then(res => {
                resolve(res[0][0]);
            })
            .catch(err => {
                reject(err);
            });
    });
};

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/site/getInitialObjects', (apiReq, apiRes) => {

    const {companyId, companyKey, lang} = apiReq.body;

    checkCompany(companyId, companyKey)
        .then(() => {

            const sqlQuery = sqls.site.getInitialObjects;
            const sqlParams = [companyId, lang];

            executeQuery(sqlQuery, sqlParams)
                .then(res => {
                    const [translationsArr, settingsArr, menuRaw, entitiesArr] = res;

                    const menu = menuRaw.map(menuItem => {
                        return convertCompositesToArray(menuItem, ['rawChildren']);
                    });
                    const translations = {}, settings = {}, entities = {};
                    for (const {name, body} of translationsArr) {
                        translations[name] = body;
                    }
                    for (const {name, body} of settingsArr) {
                        settings[name] = body;
                    }

                    for (const entity of entitiesArr) {
                        if (!entities[entity.entityType]) {
                            entities[entity.entityType] = [];
                        }
                        entities[entity.entityType].push(entity);
                    }
                    apiRes.send({data: {lang, translations, settings, menu, entities}});
                })
                .catch(err => {
                    apiRes.send({error: err});
                });
        })
        .catch(error => {
            apiRes.send(error);
        });

});

app.post('/site/getEntityById', (apiReq, apiRes) => {
    const {companyId, companyKey, entityId, lang} = apiReq.body;

    checkCompany(companyId, companyKey)
        .then(() => {
            const params = [companyId, entityId, lang];
            const options = {composites: ['rawImages']};

            runApi(apiRes, sqls.site.getEntityById, params, options);
        })
        .catch(error => {
            apiRes.send(error);
        });
});

app.post('/site/getEntitiesByType', (apiReq, apiRes) => {
    const {companyId, companyKey, entityName, lang, page, itemCount} = apiReq.body;

    checkCompany(companyId, companyKey)
        .then(() => {
            const startFrom = (page - 1) * itemCount;
            const params = [companyId, entityName, lang, startFrom, itemCount];
            const options = {type: 'array'};

            runApi(apiRes, sqls.site.getEntitiesByType, params, options);
        })
        .catch(error => {
            apiRes.send(error);
        });
});

app.post('/site/getEntityTypeDetails', (apiReq, apiRes) => {
    const {companyId, companyKey, entityName, lang} = apiReq.body;

    checkCompany(companyId, companyKey)
        .then(() => {
            const params = [companyId, entityName, lang];

            runApi(apiRes, sqls.site.getEntityTypeDetails, params);
        })
        .catch(error => {
            apiRes.send(error);
        });
});

app.post('/system/login', (apiReq, apiRes) => {
    const {username, password} = apiReq.body;
    const params = [username, password];

    runApi(apiRes, sqls.system.login, params);
});

app.post('/system/changePassword', (apiReq, apiRes) => {
    const {username, password, newPassword} = apiReq.body;
    const params = [username, password, newPassword];

    runApi(apiRes, sqls.system.changePassword, params);
});

app.post('/system/getModules', (apiReq, apiRes) => {
    const {sessionKey} = apiReq.body;

    checkSession(sessionKey)
        .then(user => {
            const params = [user.id];
            const options = {type: 'array'};

            runApi(apiRes, sqls.system.getUserModules, params, options);
        })
        .catch(err => {
            apiRes.send(err);
        });
});

app.post('/system/validateSession', (apiReq, apiRes) => {
    const {sessionKey} = apiReq.body;

    checkSession(sessionKey)
        .then(() => {
            apiRes.send({isValid: 1});
        })
        .catch(() => {
            apiRes.send({isValid: 0});
        });
});

app.post('/system/uploadImage', (apiReq, apiRes) => {
    const {sessionKey, objectType, objectId, imageFile, imageType} = apiReq.body;

    checkSession(sessionKey)
        .then(user => {
            const params = [user.companyId, objectType, objectId, imageFile, imageType];
            const options = {composites: ['rawTranslations']};
            runApi(apiRes, sqls.system.uploadImage, params, options);
        })
        .catch(err => {
            apiRes.send(err);
        });
});

app.post('/system/deleteImage', (apiReq, apiRes) => {
    const {sessionKey, objectType, objectId} = apiReq.body;

    checkSession(sessionKey)
        .then(user => {
            const params = [user.companyId, objectType, objectId];
            const options = {composites: ['rawTranslations']};
            runApi(apiRes, sqls.system.deleteImage, params, options);
        })
        .catch(err => {
            apiRes.send(err);
        });
});

app.post('/system/settings/getItems', (apiReq, apiRes) => {
    const {sessionKey, page, limit} = apiReq.body;

    checkSession(sessionKey)
        .then(user => {
            const params = [user.companyId, page*limit, limit];
            const options = {type: 'array'};

            runApi(apiRes, sqls.settings.getItems, params, options);
        })
        .catch(err => {
            apiRes.send(err);
        });
});

app.post('/system/settings/getItemCount', (apiReq, apiRes) => {
    const {sessionKey} = apiReq.body;

    checkSession(sessionKey)
        .then(user => {
            const params = [user.companyId];

            runApi(apiRes, sqls.settings.getItemCount, params);
        })
        .catch(err => {
            apiRes.send(err);
        });
});

app.post('/system/settings/getItemsByText', (apiReq, apiRes) => {
    const {sessionKey, text} = apiReq.body;

    checkSession(sessionKey)
        .then(user => {
            const params = [user.companyId, text];
            const options = {type: 'array'};

            runApi(apiRes, sqls.settings.getItemsByText, params, options);
        })
        .catch(err => {
            apiRes.send(err);
        });
});

app.post('/system/settings/editItemValue', (apiReq, apiRes) => {
    const {sessionKey, name, value} = apiReq.body;

    checkSession(sessionKey)
        .then(user => {
            const params = [user.companyId, name, value];

            runApi(apiRes, sqls.settings.editItemValue, params);
        })
        .catch(err => {
            apiRes.send(err);
        });
});

app.post('/system/getLanguagesByCompany', (apiReq, apiRes) => {
    const {sessionKey} = apiReq.body;

    checkSession(sessionKey)
        .then(user => {
            const params = [user.companyId];
            const options = {type: 'array'};

            runApi(apiRes, sqls.system.getLanguagesByCompany, params, options);
        })
        .catch(err => {
            apiRes.send(err);
        });
});

app.post('/system/translations/getItems', (apiReq, apiRes) => {
    const {sessionKey, page, limit} = apiReq.body;

    checkSession(sessionKey)
        .then(user => {
            const params = [user.companyId, page*limit, limit];
            const options = {type: 'array', composites: ['rawTranslations']};

            runApi(apiRes, sqls.translations.getItems, params, options);
        })
        .catch(err => {
            apiRes.send(err);
        });
});

app.post('/system/translations/getItemCount', (apiReq, apiRes) => {
    const {sessionKey} = apiReq.body;

    checkSession(sessionKey)
        .then(user => {
            const params = [user.companyId];

            runApi(apiRes, sqls.translations.getItemCount, params);
        })
        .catch(err => {
            apiRes.send(err);
        });
});

app.post('/system/translations/getItemsByText', (apiReq, apiRes) => {
    const {sessionKey, text} = apiReq.body;

    checkSession(sessionKey)
        .then(user => {
            const params = [user.companyId, text];
            const options = {type: 'array'};

            runApi(apiRes, sqls.translations.getItemsByText, params, options);
        })
        .catch(err => {
            apiRes.send(err);
        });
});

app.post('/system/translations/editItemValues', (apiReq, apiRes) => {
    const {sessionKey, name, values} = apiReq.body;

    checkSession(sessionKey)
        .then(user => {
            const val = values.map(v=>{return `${v.lang}||${v.body}`;}).join('&&');
            const params = [user.companyId, name, val];
            const options = {composites: ['rawTranslations']};

            runApi(apiRes, sqls.translations.editItemValues, params, options);
        })
        .catch(err => {
            apiRes.send(err);
        });
});

app.post('/system/entities/getParams', (apiReq, apiRes) => {
    const {sessionKey, entity} = apiReq.body;

    checkSession(sessionKey)
        .then(user => {
            const params = [user.companyId, entity];
            const options = {composites: ['rawParams']};

            runApi(apiRes, sqls.entities.getParams, params, options);
        })
        .catch(err => {
            apiRes.send(err);
        });
});

app.post('/system/entities/saveEntity', (apiReq, apiRes) => {
    const {sessionKey, entity, translations} = apiReq.body;

    checkSession(sessionKey)
        .then(user => {
            const val = translations.map(v => {
                return `${v.lang}||${v.seoKeywords}||${v.seoDescription}||${v.seoTitle}||${v.h1Title}`;
            }).join('&&');
            const params = [user.companyId, entity, val];
            const options = {composites: ['rawParams']};

            runApi(apiRes, sqls.entities.saveEntity, params, options);
        })
        .catch(err => {
            apiRes.send(err);
        });
});

app.post('/system/entities/getItems', (apiReq, apiRes) => {
    const {sessionKey, entityId, page, limit} = apiReq.body;

    checkSession(sessionKey)
        .then(user => {
            const params = [user.companyId, entityId, page*limit, limit];
            const options = {type: 'array', composites: ['rawTranslations']};

            runApi(apiRes, sqls.entities.getItems, params, options);
        })
        .catch(err => {
            apiRes.send(err);
        });
});

app.post('/system/entities/getItemCount', (apiReq, apiRes) => {
    const {sessionKey, entityId} = apiReq.body;

    checkSession(sessionKey)
        .then(user => {
            const params = [user.companyId, entityId];

            runApi(apiRes, sqls.entities.getItemCount, params);
        })
        .catch(err => {
            apiRes.send(err);
        });
});

app.post('/system/entities/moveImage', (apiReq, apiRes) => {
    const {sessionKey, itemId, imageId, sign} = apiReq.body;

    checkSession(sessionKey)
        .then(user => {
            const params = [user.companyId, itemId, imageId, sign];
            const options = {composites: ['rawTranslations']};

            runApi(apiRes, sqls.entities.moveImage, params, options);
        })
        .catch(err => {
            apiRes.send(err);
        });
});

app.post('/system/entities/toggleImageVisibility', (apiReq, apiRes) => {
    const {sessionKey, imageId} = apiReq.body;

    checkSession(sessionKey)
        .then(user => {
            const params = [user.companyId, imageId];
            const options = {composites: ['rawTranslations']};

            runApi(apiRes, sqls.entities.toggleImageVisibility, params, options);
        })
        .catch(err => {
            apiRes.send(err);
        });
});

app.post('/system/entities/toggleItemVisibility', (apiReq, apiRes) => {
    const {sessionKey, itemId} = apiReq.body;

    checkSession(sessionKey)
        .then(user => {
            const params = [user.companyId, itemId];
            const options = {composites: ['rawTranslations']};

            runApi(apiRes, sqls.entities.toggleItemVisibility, params, options);
        })
        .catch(err => {
            apiRes.send(err);
        });
});


app.post('/system/entities/toggleItemImportance', (apiReq, apiRes) => {
    const {sessionKey, itemId} = apiReq.body;

    checkSession(sessionKey)
        .then(user => {
            const params = [user.companyId, itemId];
            const options = {composites: ['rawTranslations']};

            runApi(apiRes, sqls.entities.toggleItemImportance, params, options);
        })
        .catch(err => {
            apiRes.send(err);
        });
});

app.post('/system/entities/toggleItemArchive', (apiReq, apiRes) => {
    const {sessionKey, itemId} = apiReq.body;

    checkSession(sessionKey)
        .then(user => {
            const params = [user.companyId, itemId];
            const options = {composites: ['rawTranslations']};

            runApi(apiRes, sqls.entities.toggleItemArchive, params, options);
        })
        .catch(err => {
            apiRes.send(err);
        });
});

app.post('/system/entities/getItemById', (apiReq, apiRes) => {
    const {sessionKey, itemId} = apiReq.body;

    checkSession(sessionKey)
        .then(user => {
            const params = [user.companyId, itemId];
            const options = {composites: ['rawTranslations']};

            runApi(apiRes, sqls.entities.getItemById, params, options);
        })
        .catch(err => {
            apiRes.send(err);
        });
});

app.post('/system/entities/getItemImages', (apiReq, apiRes) => {
    const {sessionKey, itemId} = apiReq.body;

    checkSession(sessionKey)
        .then(user => {
            const params = [user.companyId, itemId];
            const options = {type: 'array'};

            runApi(apiRes, sqls.entities.getItemImages, params, options);
        })
        .catch(err => {
            apiRes.send(err);
        });
});

app.post('/system/entities/saveItem', (apiReq, apiRes) => {
    const {sessionKey, itemId, param, showDate, translations} = apiReq.body;

    checkSession(sessionKey)
        .then(user => {
            const val = translations.map(v => {
                return `${v.lang}||${v.link}||${v.urlName}||${v.seoKeywords}||`+
                    `${v.seoDescription}||${v.title}||${v.shortDescription}||${v.body}`;
            }).join('&&');
            const params = [user.companyId, param, itemId, showDate, val];
            const options = {composites: ['rawTranslations']};

            runApi(apiRes, sqls.entities.saveItem, params, options);
        })
        .catch(err => {
            apiRes.send(err);
        });
});

app.post('/getDataJson', (apiReq, apiRes) => {
    const {lang} = apiReq.body;
    db.object.findAll({
        where:{isActive: true},
        order: [['menu_order']],
        include: [
            {model: db.objectDetail, as: 'translations', where: {lang}},
            {
                model: db.category,
                order: [['menu_order', 'asc']],
                include: [
                    {model: db.categoryDetail, as: 'translations', where: {lang}},
                    {
                        model: db.product,
                        where: {isActive: true},
                        order: [['showDate', 'desc']],
                        include: [
                            {model: db.productDetail, as: 'translations', where: {lang}}
                        ]
                    }
                ]
            }
        ]
    })
        .then(data => {
            const dynamicSort = (property, order = 'asc') => {
                const sortOrder = order === "desc" ? -1 : 1;
                return (a, b) =>
                    a[property] < b[property] ? -sortOrder : (a[property] > b[property] ? sortOrder : 0);
            };

            const res = (JSON.parse(JSON.stringify(data))).map(object => {
                const {name} = object.translations[0];
                object.name = name;
                delete object.translations;

                object.categories = object.categories.map(category => {
                    const {name} = category.translations[0];
                    category.name = name;
                    delete category.translations;
                    delete category.objectId;

                    category.products = category.products.map(product => {
                        const {name, description, urlName} = product.translations[0];
                        product.urlName = urlName;
                        product.name = name;
                        product.description = description;
                        delete product.translations;
                        delete product.isActive;
                        delete product.categoryId;

                        return product;
                    }).filter(item => item.isVisible)
                        .sort(dynamicSort('showDate', 'desc'));

                    return category;
                }).sort(dynamicSort('menuOrder'));

                return object;
            });
            apiRes.send(res);
        })
        .catch(() => {
            apiRes.send({error: {message: "CANNOT RETRIEVE"}});
        });
});

const authFunction = (req, res, next) => {
    const {sessionKey} = req.method === 'DELETE' ? req.query : req.body;

    if (!sessionKey) {
        return res.status(403).send({data: {}, error: {message: 'Access Denied'}});
    }

    checkSession(sessionKey)
        .then(() => (next())).catch(err=>(res.status(401).send({data:{}, error: {...err}})));
};

require("./routes/opetObject.routes")(app, authFunction);
require("./routes/category.routes")(app, authFunction);
require("./routes/product.routes")(app, authFunction);
require("./routes/productSize.routes")(app, authFunction);

app.post('*', function (apiReq, apiRes) {
    apiRes.end(JSON.stringify({
        error: {
            code: 404,
            message: 'NOT_FOUND'
        }
    }));
});

app.get('*', function (apiReq, apiRes) {
    apiRes.end(JSON.stringify({
        error: {
            code: 404,
            message: 'NOT_FOUND'
        }
    }));
});

app.listen(process.argv[2] || wsPort, "0.0.0.0");

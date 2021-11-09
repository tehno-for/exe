"use strict";

const fs = require("fs");
const mqpacker = require("css-mqpacker");

const resultMQ = mqpacker.pack(fs.readFileSync("inc/style.css", "utf8"), {
    from: "inc/style.css",
    sort: true,
    to: "inc/scss/style.mq.css"
});
fs.writeFileSync("inc/scss/style.mq.css", resultMQ.css);


const arrJS = {
    "jquery.3.2.1.js": fs.readFileSync("inc/jquery.3.2.1.js", "utf-8"),
    "jquery-ui.min.js": fs.readFileSync("inc/jquery-ui.min.js", "utf-8"),
    "modernizr.js": fs.readFileSync("inc/modernizr.js", "utf-8"),
    "mobile.detect.js": fs.readFileSync("inc/mobile.detect.js", "utf-8"),
    "jquery.alphanum.js": fs.readFileSync("inc/jquery.alphanum.js", "utf-8"),
    "jquery.cookie.js": fs.readFileSync("inc/jquery.cookie.js", "utf-8"),
    "jquery.mask.js": fs.readFileSync("inc/jquery.mask.js", "utf-8"),
    "jquery.print.js": fs.readFileSync("inc/jquery.print.js", "utf-8"),
    "jquery.serializejson.js": fs.readFileSync("inc/jquery.serializejson.js", "utf-8"),
    "jquery.tmpl.js": fs.readFileSync("inc/jquery.tmpl.js", "utf-8"),
    "raphael.js": fs.readFileSync("inc/raphael.js", "utf-8"),
    "swiper.js": fs.readFileSync("inc/swiper.js", "utf-8"),
    "map.turkeypaths.js": fs.readFileSync("inc/map.turkey.paths.js", "utf-8"),
    "plugins.js": fs.readFileSync("inc/plugins.js", "utf-8"),
    "services.js": fs.readFileSync("inc/services.js", "utf-8"),
    "ui.js": fs.readFileSync("inc/ui.js", "utf-8"),
    "functions.js": fs.readFileSync("inc/functions.js", "utf-8"),
    "functions.map.js": fs.readFileSync("inc/functions.map.js", "utf-8")
};
const uglifyJS = require("uglify-js");
const resultJS = uglifyJS.minify(arrJS);
fs.writeFile("inc/functions.min.js", resultJS.code, function (err) {
    if (err) throw err;
});

const arrCSS = [
    "inc/scss/style.mq.css"
];
const uglifyCSS = require("uglifycss");
const resultCSS = uglifyCSS.processFiles(arrCSS);
fs.writeFile("inc/style.min.css", resultCSS, function (err) {
    if (err) throw err;
});
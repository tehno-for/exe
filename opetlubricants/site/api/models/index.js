'use strict';

require('dotenv').config();

const fs = require("fs");
const path = require("path");
const dbConfig = require('../config.json')[process.env.NODE_ENV || "dev"];

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.mysqlParams.database, dbConfig.mysqlParams.user, dbConfig.mysqlParams.password, {
    host: dbConfig.mysqlParams.host,
    dialect: 'mysql',
    operatorsAliases: 1,
    timezone: '+04:00'
});

const db = {};

db.object = sequelize.import(path.join(__dirname, 'object.js'));
db.objectDetail = sequelize.import(path.join(__dirname, 'objectDetail.js'));
db.category = sequelize.import(path.join(__dirname, 'category.js'));
db.categoryDetail = sequelize.import(path.join(__dirname, 'categoryDetail.js'));
db.product = sequelize.import(path.join(__dirname, 'product.js'));
db.productDetail = sequelize.import(path.join(__dirname, 'productDetail.js'));
db.productSize = sequelize.import(path.join(__dirname, 'productSize.js'));
db.productDetailLink = sequelize.import(path.join(__dirname, 'productDetailLink.js'));

db.object.hasMany(db.objectDetail, {as: "translations"});
db.objectDetail.belongsTo(db.object);

db.object.hasMany(db.category);
db.category.belongsTo(db.object);

db.category.hasMany(db.categoryDetail, {as: "translations"});
db.categoryDetail.belongsTo(db.category);

db.category.hasMany(db.product);
db.product.belongsTo(db.category);

db.product.hasMany(db.productDetail, {as: "translations"});
db.productDetail.belongsTo(db.product);

db.product.hasMany(db.productSize);
db.productSize.belongsTo(db.product);

db.productDetail.hasMany(db.productDetailLink);
db.productDetailLink.belongsTo(db.productDetail);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync({/*alter: true*/});

module.exports = db;
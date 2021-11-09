"use strict";

// Model: ProductDetail
module.exports = (sequelize, Sequelize) => {
    return sequelize.define('productDetail', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        lang: {
            type: Sequelize.STRING
        },

        link: {
            type: Sequelize.STRING
        },

        name: {
            type: Sequelize.STRING,
            field: 'title'
        },

        description: {
            type: Sequelize.TEXT,
            field: 'body'
        },

        urlName: {
            type: Sequelize.STRING
        },

        seoKeywords: {
            type: Sequelize.STRING
        },

        seoDescription: {
            type: Sequelize.STRING
        },

        productId: {
            type: Sequelize.INTEGER,
            field: 'entity_id'
        }

    }, {
        underscored: true,
        timestamps: false,
        tableName: 'asm_entity_details'
    });
};
"use strict";

// Model: ProductDetailLink
module.exports = (sequelize, Sequelize) => {
    return sequelize.define('productDetailLink', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        productId: {
            type: Sequelize.INTEGER,
            field: 'entity_id'
        },

        productDetailId: {
            type: Sequelize.INTEGER,
            field: 'detail_id'
        },

        icon: {
            type: Sequelize.STRING
        },

        svg: {
            type: Sequelize.TEXT
        },

        name: {
            type: Sequelize.STRING
        },

        url: {
            type: Sequelize.STRING
        },

        isActive: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }

    }, {
        underscored: true,
        timestamps: false,
        tableName: 'asm_entity_detail_links'
    });
};
"use strict";

// Model: Product
module.exports = (sequelize, Sequelize) => {
    return sequelize.define('product', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        categoryId: {
            type: Sequelize.INTEGER,
            field: 'type_id'
        },

        showDate: {
            type: Sequelize.DATE
        },

        picture: {
            type: Sequelize.STRING,
            field: 'main_image'
        },

        isActive: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },

        isVisible: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
        
    }, {
        underscored: true,
        timestamps: false,
        tableName: 'asm_entities'
    });
};
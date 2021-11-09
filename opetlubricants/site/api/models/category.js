"use strict";

// Model: Category
module.exports = (sequelize, Sequelize) => {
    return sequelize.define('category', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        name: {
            type: Sequelize.STRING
        },
        
        icon: {
            type: Sequelize.STRING
        },
        
        svg: {
            type: Sequelize.TEXT
        },

        isActive: {
            type: Sequelize.BOOLEAN
        },

        menuOrder: {
            type: Sequelize.INTEGER
        },

        hasTitle: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },

        hasSeo: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },

        hasBody: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },

        isVisible: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
        
    }, {
        underscored: true,
        timestamps: false,
        tableName: 'asm_entity_types'
    });
};
"use strict";

// Model: Object
module.exports = (sequelize, Sequelize) => {
    return sequelize.define('object', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        
        isActive: {
            type: Sequelize.BOOLEAN
        },
        
        menuOrder: {
            type: Sequelize.INTEGER
        }
        
    }, {
        underscored: true,
        timestamps: false,
        tableName: 'asm_menu'
    });
};
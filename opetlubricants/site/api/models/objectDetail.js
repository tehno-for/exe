"use strict";

module.exports = (sequelize, Sequelize) => {
    return sequelize.define('objectDetail', {
        objectId: {
            type: Sequelize.INTEGER
        },

        lang: {
            type: Sequelize.STRING
        },

        name: {
            type: Sequelize.STRING,
            field: 'title'
        }
        
    }, {
        underscored: true,
        timestamps: false,
        tableName: 'asm_object_details'
    });
};
"use strict";

// Model: CategoryDetails
module.exports = (sequelize, Sequelize) => {
    return sequelize.define('categoryDetail', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        lang: {
            type: Sequelize.STRING
        },

        name: {
            type: Sequelize.STRING,
            field: 'title'
        },

        categoryId: {
            type: Sequelize.INTEGER,
            field: 'type_id'
        }

    }, {
        underscored: true,
        timestamps: false,
        tableName: 'asm_entity_type_details'
    });
};
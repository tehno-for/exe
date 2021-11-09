"use strict";

// Model: ProductSize
module.exports = (sequelize, Sequelize) => {
    return sequelize.define('productSize', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        productId: {
            type: Sequelize.INTEGER,
            field: 'entity_id'
        },
        
        picture: {
            type: Sequelize.STRING,
            field: 'image_file'
        },
        
        size: {
            type: Sequelize.STRING
        },
        
        price: {
            type: Sequelize.DOUBLE
        },

        isActive: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }

    }, {
        underscored: true,
        timestamps: false,
        tableName: 'asm_entity_images'
    });
};
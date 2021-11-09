'use strict';

// productSizes
const db = require("../models");
const ProductSize = db.productSize;


// Create and Save a new ProductSize
exports.create = (req, res) => {

    // Create a ProductSize
    const {productId, picture, size, price} = req.body;
    const productSize = {
        productId, picture, size, price
    };

    // Save ProductSize in the database
    ProductSize.create(productSize)
        .then(data => {
            res.send({data});
        })
        .catch(err => {
            res.status(500).send({
                error: {
                    ...err,
                    errno: -1,
                    code: "CANNOT_CREATE"
                }
            });
        });
};

exports.delete = (req, res) => {
    const {id} = req.params;

    ProductSize.destroy({where: {id}})
        .then(data => {
            res.send({data:{}});
        })
        .catch(err => {
            res.status(500).send({
                error: {
                    ...err,
                    errno: -9,
                    code: "CANNOT_DELETE"
                }
            });
        });
}
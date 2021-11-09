'use strict';

module.exports = (app, authFunction) => {
    const productSizes = require("../controllers/productSize.controller.js");

    const router = require("express").Router();

    // Create a new ProductSize
    router.post("/", authFunction, productSizes.create);

    router.delete("/:id", authFunction, productSizes.delete);

    app.use('/api/productSizes', router);
};
'use strict';

module.exports = (app, authFunction) => {
    const products = require("../controllers/product.controller.js");

    const router = require("express").Router();

    // Create a new Product
    router.post("/", authFunction, products.create);

    // Retrieve all Products
    router.get("/", products.findAll);

    // Retrieve a single Product with id
    router.get("/:id", products.findOne);

    router.get("/article/:id/:lang", products.articleWithLang);

    router.get("/product/:id/:lang", products.productWithLang);

    // Update a Product with id
    router.put("/:id", authFunction, products.update);

    // Delete a Product with id
    router.delete("/:id", authFunction, products.delete);

    app.use('/api/products', router);
};
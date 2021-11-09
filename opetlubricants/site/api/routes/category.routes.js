'use strict';

module.exports = (app, authFunction) => {
    const categories = require("../controllers/category.controller.js");

    const router = require("express").Router();

    // Create a new Category
    router.post("/", authFunction, categories.create);

    // Retrieve all Categorys
    router.get("/", categories.findAll);

    router.get("/techSupport", categories.findTechSupport);

    router.get("/footerCategories", categories.findFooterCategories);

    router.post("/footerEntities", categories.getFooterEntities);

    // Retrieve all Categorys
    router.post("/getTechSupport", categories.getTechSupportForSite);

    // Retrieve a single Category with id
    router.get("/:id", categories.findOne);

    // Update a Category with id
    router.put("/:id", authFunction, categories.update);

    // Delete a Category with id
    router.delete("/:id", authFunction, categories.delete);

    app.use('/api/categories', router);
};
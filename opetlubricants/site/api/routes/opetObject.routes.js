'use strict';

module.exports = (app, authFunction) => {
    const opetObjects = require("../controllers/opetObject.controller.js");

    const router = require("express").Router();

    // Create a new OpetObject
    router.post("/", authFunction, opetObjects.create);

    // Retrieve all OpetObjects
    router.get("/", opetObjects.findAll);

    // Retrieve a single OpetObject with id
    router.get("/:id", opetObjects.findOne);

    // Update a OpetObject with id
    router.put("/:id", authFunction, opetObjects.update);

    // Delete a OpetObject with id
    router.delete("/:id", authFunction, opetObjects.delete);

    app.use('/api/opetObjects', router);
};
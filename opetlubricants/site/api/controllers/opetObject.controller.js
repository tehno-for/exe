'use strict';

// opetObjects
const db = require("../models");
const OpetObject = db.object;
const ObjectDetail = db.objectDetail;
const Op = db.Sequelize.Op;

// Create and Save a new OpetObject
exports.create = (req, res) => {

    // Create a OpetObject
    const {menuOrder, details} = req.body;
    const opetObject = {menuOrder};

    // Save OpetObject in the database
    OpetObject.create(opetObject)
        .then(async data => {
            const {id: objectId} = data;
            for (const detail of details) {
                await ObjectDetail.create({...detail, objectId});
            }
            res.send({data: {id: objectId, translations: details}});
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

// Retrieve all OpetObjects from the database.
exports.findAll = (req, res) => {
    OpetObject.findAll({
        include: [{model: db.objectDetail, as: 'translations'}],
        where: {isActive: true},
        order: [['menu_order']]
    })
        .then(data => {
            res.send({data});
        })
        .catch(err => {
            res.status(500).send({
                error: {
                    ...err,
                    errno: -2,
                    code: "CANNOT_GET"

                }
            });
        });
};

// Find a single OpetObject with an id
const findOne = (req, res) => {
    const {id} = req.params;

    OpetObject.findOne({
        include: [{model: db.objectDetail, as: 'translations'}],
        where: {id, isActive: true}
    })
        .then(data => {
            res.send({data});
        })
        .catch(err => {
            res.status(500).send({
                error: {
                    ...err,
                    errno: -3,
                    code: "CANNOT_GET_BY_ID",
                    id
                }
            });
        });
};

exports.findOne = findOne;

// Update a OpetObject by the id in the request
exports.update = async (req, res) => {
    const id = req.params.id;

    const {menuOrder, details} = req.body;

    await OpetObject.update({menuOrder}, {where: {id}});

    for (const detail of details) {
        await ObjectDetail.update({...detail}, {where: {lang: detail.lang, objectId: id}});
    }

    return findOne(req, res);
};

// Delete a OpetObject with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    OpetObject.update({isActive: 0}, {where: {id, isActive: true}})
        .then(num => {
            if (num === 1 || num.length && num[0] === 1) {
                res.send({
                    data: {}
                });
            } else {
                res.send({
                    error: {
                        errno: -6,
                        code: "DID_NOT_DELETE",
                        id
                    }
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                error: {
                    ...err,
                    errno: -7,
                    code: "CANNOT_DELETE_BY",
                    id
                }
            });
        });
};

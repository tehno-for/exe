'use strict';

// categories
const db = require("../models");
const Category = db.category;
const CategoryDetail = db.categoryDetail;
const Op = db.Sequelize.Op;


// Find a single Category with an id
const findOne = (req, res) => {
    const id = req.params.id;

    Category.findOne({
        include: [{model: db.categoryDetail, as: 'translations'},
            {model: db.object, include: [{model: db.objectDetail, as: 'translations'}]}],
        where: {id, isActive: true}})
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

// Create and Save a new Category
exports.create = (req, res) => {

    // Create a Category
    const {menuOrder, objectId, icon, svg, translations} = req.body;
    const category = {
        menuOrder, objectId, icon, svg,
        hasTitle: objectId === 0,
        hasSeo: objectId === 0,
        hasBody: objectId === 0,
        isVisible: objectId === 0,
        name: objectId===0 ? `footer${Math.random().toString().substr(2,8)}` : translations[0].name
    };

    // Save Category in the database
    Category.create(category)
        .then(async data => {
            const {id: categoryId} = data;
            for (const translation of translations) {
                await CategoryDetail.create({...translation, categoryId});
            }
            req.params.id = categoryId;
            return findOne(req, res);
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

// Retrieve all Categories from the database.
exports.findAll = (req, res) => {

    Category.findAll({
        include: [
            {model: db.categoryDetail, as: 'translations'},
            {model: db.object, include: [{model: db.objectDetail, as: 'translations'}]}
        ],
        where: {objectId: {[Op.not]: null, [Op.ne]: 0}, isActive: true},
        order: [['object_id'],['menu_order']]
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

exports.findFooterCategories = (req, res) => {

    Category.findAll({
        include: [
            {model: db.categoryDetail, as: 'translations'},
            {model: db.object, include: [{model: db.objectDetail, as: 'translations'}]}
        ],
        where: {objectId: {[Op.eq]: 0}, isActive: true},
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

exports.getFooterEntities = (req, res) => {

    const {lang} = req.body;

    Category.findAll({
        include: [
            {model: db.categoryDetail, where: {lang}, as: 'translations'},
            {model: db.product, include: [{model: db.productDetail, where: {lang}, as: 'translations'}]}
        ],
        where: {objectId: {[Op.eq]: 0}, isActive: true},
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

// Retrieve all Categories from the database.
exports.findTechSupport = (req, res) => {

    Category.findAll({
        include: [
            {model: db.categoryDetail, as: 'translations'}
        ],
        where: {id: {[Op.in]: [1,2,3,4]}, isActive: true}})
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

// Retrieve all Categories from the database.
exports.findTechSupport = (req, res) => {

    Category.findAll({
        include: [
            {model: db.categoryDetail, as: 'translations'}
        ],
        where: {id: {[Op.in]: [1,2,3,4]}, isActive: true},
        order: [['menu_order']]
    })
        .then(data => {
            res.send({data});
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                error: {
                    ...err,
                    errno: -2,
                    code: "CANNOT_GET"

                }
            });
        });
};

// Retrieve all Categories from the database.
exports.getTechSupportForSite = (req, res) => {

    const {lang} = req.query;

    Category.findAll({
        include: [
            {model: db.categoryDetail, as: 'translations', where: {lang}},
            {model: db.product, where: {isVisible: true, isActive: true}, include: [
                    {model: db.productDetail, as: 'translations', where: {lang}}
                ]}
        ],
        where: {id: {[Op.in]: [1,2,3,4]}, isActive: true},
        order: [['menu_order']]
    })
        .then(data => {
            res.send({data});
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                error: {
                    ...err,
                    errno: -2,
                    code: "CANNOT_GET"

                }
            });
        });
};

// Update a Category by the id in the request
exports.update = async (req, res) => {
    const id = req.params.id;

    const {menuOrder, objectId, icon, svg, translations} = req.body;

    await Category.update({menuOrder, objectId, icon, svg}, {where: {id}} )
        .then(async () => {
            for (const translation of translations) {
                await CategoryDetail.update({...translation}, {where: {categoryId: id, lang: translation.lang}});
            }
        });

    return findOne(req, res);
};

// Delete a Category with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Category.update({isActive: 0}, {where: {id, isActive: true}})
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

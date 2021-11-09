'use strict';

// products
const db = require("../models");
const Product = db.product;
const ProductSize = db.productSize;
const ProductDetail = db.productDetail;
const ProductDetailLink = db.productDetailLink;
const Op = db.Sequelize.Op;

// Find a single Product with an id
const findOne = (req, res) => {
    const id = req.params.id;

    Product.findOne(
        {
            where: {id, isActive: true},
            include: [
                {model: db.productSize},
                {model: db.productDetail, as:'translations', include:[
                        {model: db.productDetailLink}
                    ]}
            ]
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


exports.productWithLang = (req, res) => {
    const {id, lang} = req.params;

    Product.findOne(
        {
            where: {id, isActive: true},
            include: [
                {model: db.productSize},
                {model: db.productDetail, as:'translations', where: {lang}, include:[
                        {model: db.productDetailLink}
                    ]}
            ]
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


exports.articleWithLang = (req, res) => {
    const {id, lang} = req.params;

    Product.findOne(
        {
            where: {id, isActive: true},
            include: [
                {model: db.category},
                {model: db.productDetail, as:'translations', where: {lang}}
            ]
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

// Create and Save a new Product
exports.create = (req, res) => {

    // Create a Product
    const {categoryId, showDate, picture, translations, sizes} = req.body;
    const product = {
        categoryId, showDate, picture
    };

    // Save Product in the database
    Product.create(product)
        .then(async data => {
            const {id: productId} = data;

            if (sizes && sizes.length>0) {
                for (const sz of sizes) {
                    const {picture, size, price} = sz;
                    await ProductSize.create({productId, picture, size, price});
                }
            }

            if (translations && translations.length > 0) {
                for (const translation of translations) {
                    const {name, lang, description, links, urlName, seoDescription, seoKeywords} = translation;
                    await ProductDetail.create({productId, name, lang, description, urlName, seoDescription, seoKeywords})
                        .then(async detailData => {
                            for (const link of links) {
                                const {id: productDetailId} = detailData;
                                const {icon, svg, name, url} = link;
                                await ProductDetailLink.create({productDetailId, productId, icon, svg, name, url});
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }
            }

            req.params.id = productId;

            return findOne(req, res);

        })
        .catch(err => {
            console.log(err);
            res.status(500).send({
                error: {
                    ...err,
                    errno: -1,
                    code: "CANNOT_CREATE"
                }
            });
        });
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
    const {categoryId} = req.query;

    if (!categoryId) {
        return res.send([]);
    }

    Product.findAll({
        where: {categoryId, isActive: true},
        order: [['showDate', 'desc']],
        include: [
            {model: db.category, include: [
                    {model: db.categoryDetail, as:'translations'}
                ]},
            {model: db.productSize},
            {model: db.productDetail, as:'translations', include:[
                    {model: db.productDetailLink}
                ]}
        ]
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

// Update a Product by the id in the request
exports.update = async (req, res) => {
    const {id: productId} = req.params;

    const {translations, sizes, showDate} = req.body;

    console.log(showDate, req.body)

    await Product.update({showDate}, {where: {id: productId}});

    ProductSize.destroy({where: {productId}});
    ProductDetail.destroy({where: {productId}});
    ProductDetailLink.destroy({where: {productId}});

    if (sizes && sizes.length>0) {
        for (const sz of sizes) {
            const {picture, size, price} = sz;
            await ProductSize.create({productId, picture, size, price});
        }
    }

    if (translations && translations.length>0) {
        for (const translation of translations) {
            const {name, lang, description, links, urlName, seoDescription, seoKeywords} = translation;
            await ProductDetail.create({productId, name, lang, description, urlName, seoDescription, seoKeywords})
                .then(async detailData => {
                    for (const link of links) {
                        const {id: productDetailId} = detailData;
                        const {icon, svg, name, url} = link;
                        await ProductDetailLink.create({productId, productDetailId, icon, svg, name, url});
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    return findOne(req, res);
};

// Delete a Product with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Product.update({isActive: 0}, {where: {id, isActive: true}})
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
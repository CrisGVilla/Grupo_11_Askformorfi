const express = require('express');
const router = express.Router();

const productController = {
    list: (req,res) => {
        res.send('listado de productos');
    },
    cart: (req,res) => {
        res.render('productCart');
    },
    detail: (req,res) => {
        res.render('productDetail');
    },
    load: (req, res) => {
        res.render('productsLoadForm')
    }
}

module.exports = productController;
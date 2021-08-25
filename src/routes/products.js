const express = require('express');
const router = express.Router();

const productController = require('../controllers/productControllers');


router.get('/', productController.list);
router.get('/productCart', productController.cart);
router.get('/productDetail', productController.detail);
router.get('/productLoad', productController.load);

module.exports = router;
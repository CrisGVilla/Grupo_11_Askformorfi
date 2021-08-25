const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainControllers');

router.get('/', mainController.home);
router.get('/about-us', mainController.about);
router.get('/login', mainController.login);
router.get('/sing-Up', mainController.singUp);

module.exports = router;
const express = require('express');
const router = express.Router();

const usersController = require('../controllers/userControllers');

router.get('/', usersController.main);

module.exports = router;
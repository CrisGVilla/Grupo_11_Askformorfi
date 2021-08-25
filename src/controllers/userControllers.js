const express = require('express');
const router = express.Router();

const usersController = {
    main: (req,res) => {
        res.send('Usuarios');
    },
}

module.exports = usersController;
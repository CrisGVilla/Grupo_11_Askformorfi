const express = require('express');
const router = express.Router();

const mainController = {
    home: (req,res) =>{
        res.render('index');
    },
    about: (req,res) => {
        res.send('about us');
    },
    login: (req, res) => {
        res.render('login');
    },
    singUp: (req,res) => {
        res.render('register');
    },
};

module.exports = mainController;
const express = require('express');
const routes = express.Router()
const rotaPrincipal = require('../controllers/homeController.js');

routes.get('/home', rotaPrincipal.homePagina);


module.exports = routes


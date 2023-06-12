const express = require('express');
const routes = express.Router()
const rotaPrincipal = require('../controllers/homeController.js');
const rotaSobre = require('../controllers/sobreController.js');

routes.get('/home', rotaPrincipal.homePagina);
routes.get('/sobre', rotaSobre.sobre);


module.exports = routes //importa o modúlo das rotas


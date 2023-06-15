const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController.js');
const contatoController = require('./controllers/contatoController.js');
//Rota da home
route.get('/paginaInicial', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//Rota de contatos
route.get('/agradecimento', contatoController.agradecimento);

module.exports = route

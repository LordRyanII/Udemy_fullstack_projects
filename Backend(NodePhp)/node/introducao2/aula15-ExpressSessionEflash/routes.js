const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');


// Rotas da home
route.get('/',  homeController.paginaInicial, function (res, req, next) {
    console.log();
    console.log('Estou aqui')
    console.log();
});
route.post('/cadastro', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);


module.exports = route;

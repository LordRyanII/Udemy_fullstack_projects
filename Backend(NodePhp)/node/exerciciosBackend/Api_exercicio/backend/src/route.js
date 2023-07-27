const express = require('express');
const route = express.Router();
const homeController = require('./controller/produtosController');
const produtos = require('./controller/produtosController')
//Rota Get

route.get('/home', produtos.listarProdutos);
route.post('/criarDados', produtos.criarDados);

module.exports = route;

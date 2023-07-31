const express = require('express');
const router = express.Router();
const produtosController = require('./controller/produtosController');

// Rotas para listar produtos e criar novo produto
router.get('/produtos', produtosController.listarProdutos);
router.post('/produtos', produtosController.criarDados);

module.exports = router;

const express = require('express');
const app = express.Router();
const Filmes = require('../controller/Filmes');

app.get('filmes/listafilmes', Filmes.listaFilmes);
app.post('filmes/criarfilmes', Filmes.criarFilmes);


module.exports = app
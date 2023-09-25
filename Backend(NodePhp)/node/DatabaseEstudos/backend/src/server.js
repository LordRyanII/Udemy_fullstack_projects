const express = require('express');
const server = express();
const porta = 4003;
const database = require('./database/models/mongoConnect');
const Mongoconect = new database();
const rotas = require('./routes/Principal');

server.use(rotas);

server.listen(porta, () => {
    Mongoconect.connect('mongodb://127.0.0.1:27017/');
    console.log('-------------------------------------');
    console.log(`Servidor rodando na porta ${porta}`);
    console.log('-------------------------------------');
    console.log('Servidor iniciado no endereço: http://localhost:4003');
    console.log('---------------------------------------------------------');
})
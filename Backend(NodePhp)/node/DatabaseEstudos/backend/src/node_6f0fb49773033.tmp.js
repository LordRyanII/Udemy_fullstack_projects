const express = require('express');
const server = express();
const porta = 3003;

server.listen(porta, () => {
    console.log('-------------------------------------');
    console.log(`Servidor rodando na porta ${porta}`);
})
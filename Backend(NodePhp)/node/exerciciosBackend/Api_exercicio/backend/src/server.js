require('dotenv').config();
const express = require('express');
const app = express();
const porta = 5000;
const routes = require('./route');
const Conexao = require('./models/connectModels');
const mongoDbConection = new Conexao(process.env.CONNECTIONSTRING); // Passa o valor correto para o construtor

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rotas
app.use(routes);

// Servidor
app.listen(porta, () => {
    mongoDbConection._connect()
    console.log(`--------------------------------------------------------------------`);
    console.log(`Servidor rodando na porta ${porta}`);
    console.log(`--------------------------------------------------------------------`);
    console.log(`Endereço: http://localhost:${porta}`);
});

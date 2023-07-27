const express = require('express');
const app = express();
const porta = 5000;
const routes = require('./route');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rotas
app.use(routes);

// Servidor
app.listen(porta, () => {
    console.log(`--------------------------------------------------------------------`);
    console.log(`Servidor rodando na porta ${porta}`);
    console.log(`--------------------------------------------------------------------`);
    console.log(`Endereço: http://localhost:${porta}`);
});

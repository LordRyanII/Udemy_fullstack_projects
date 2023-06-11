const express = require('express');
const app = express();
const porta = 4006
const routes = require('./routes')

app.use(express.urlencoded({extended:true})); //Para tratar o body da requisição

app.use(routes)

app.listen(porta, () => {
    console.log(`Servidor rodando na porta:${porta}`)
    console.log(`Acesse: http://localhost:${porta}`)
});

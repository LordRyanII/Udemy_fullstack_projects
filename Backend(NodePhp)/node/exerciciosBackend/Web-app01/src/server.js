const express = require('express');
const app = express();
const porta = 3005
const rotas = require('../routes/routes.js');

app.use(express.urlencoded({extended: true}));

app.use(rotas)

app.listen(porta, () => {
    console.log(porta)
    console.log(`Aplicação rodando no endereço: http://localhost:${porta}`)
})
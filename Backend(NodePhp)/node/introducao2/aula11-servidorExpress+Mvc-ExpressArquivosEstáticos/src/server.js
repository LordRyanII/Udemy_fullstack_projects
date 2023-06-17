const express = require('express');
const app = express();
const porta = 4011
const routes = require('./routes')
const path = require('path');

app.use(express.urlencoded({extended:true})); //Para tratar o body da requisição

//Conteúdo estático
app.use(express.static('./src/public'));
/*
    Ou
    app.use(express.static(path.resolve(__dirname, 'public')))
*/

app.set('views', path.resolve(__dirname, /*explicação 01*/ 'views'));
app.set('view engine', 'ejs');

app.use(routes)

app.listen(porta, () => {
    console.log(`Servidor rodando na porta:${porta}`)
    console.log(`Acesse: http://localhost:${porta}`)
});

// explicação 01: Aqui poderia vir o endereço da pasta, caso não estivesse na mesma pasta
const express = require('express');
const app = express();
const porta = 4009
const routes = require('./routes')
const path = require('path');

app.use(express.urlencoded({extended:true})); //Para tratar o body da requisição


app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes)

app.listen(porta, () => {
    console.log(`Servidor rodando na porta:${porta}`)
    console.log(`Acesse: http://localhost:${porta}`)
});

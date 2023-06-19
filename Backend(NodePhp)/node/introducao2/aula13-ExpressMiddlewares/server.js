const express = require('express');
const app = express();
const routes = require('./routes');
const meuMiddleware = require('./src/middlewares/meuMiddleware.js') //ou const  {meuMiddleware} = require('/src...')
const path = require('path');
const porta = 5002
app.use(express.urlencoded({ extended: true })); //tratar corpo da requisição

//Trata de rotas
app.use(express.static(path.resolve(__dirname, 'public'))); 

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

//Middleware
app.use(meuMiddleware.meuMiddleware);
app.use(routes)

app.listen(porta, () => {
  console.log(`Acessar http://localhost:${porta}`);
});


require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.emit('Pronto')
  })
  .catch(error => {
    console.log(`Ocorreu um erro: ${error}`)
  })

const routes = require('./routes');
const meuMiddleware = require('./src/middlewares/meuMiddleware.js') //ou const  {meuMiddleware} = require('/src...')
const path = require('path');
const porta = 5000
app.use(express.urlencoded({ extended: true })); //tratar corpo da requisição

//Trata de rotas
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

/*Middleware
app.use(meuMiddleware.meuMiddleware);
app.use(routes)
*/

app.on('Pronto', () => {
  app.listen(porta, () => {
    console.log(`Acesse: http://localhost:${porta}`);
  });
});



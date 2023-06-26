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

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const { middlewareGlobal } = require('./src/middlewares/meuMiddleware.js')
const path = require('path');
const porta = 5000
app.use(express.urlencoded({ extended: true })); //tratar corpo da requisição

//Trata de rotas
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret: 'nbjnb nj njnjn n njnjn rya ren nez sky as6()',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
})

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.on('Pronto', () => {
  app.listen(porta, () => {
    console.log(`Acesse: http://localhost:${porta}`);
  });
});

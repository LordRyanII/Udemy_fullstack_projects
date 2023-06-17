const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const porta = 5000

app.use(express.urlencoded({ extended: true })); //tratar corpo da requisição

app.use(express.static(path.resolve(__dirname, 'public'))); 

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(porta, () => {
  console.log(`Acessar http://localhost:${porta}`);
});


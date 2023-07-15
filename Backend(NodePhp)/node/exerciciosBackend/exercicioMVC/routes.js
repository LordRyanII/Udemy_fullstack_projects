const express = require('express');
const router = express.Router()  //define contexto roteador
const homeController = require('./controllers/homeController');

/* 
    Rotas => será exportadas para o servidor
*/

router.get('/home', homeController.home); //Home page
module.exports = router
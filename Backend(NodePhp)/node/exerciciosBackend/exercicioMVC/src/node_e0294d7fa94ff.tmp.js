const express = require('express'); 
const app = express(); //Express referenciado 
const porta = 8081 //Número da porta
const rotas = require('../routes'); //Caminho dos arquivos de rotas, e a variável para usá-las

app.use(express.urlencoded({extended:true})); // Para tratar o body da requisição

app.use(rotas); //Para iniciar o arquivo de rotas

app.listen( porta, () =>{
    console.log(`Acesse: http://localhost:${porta}`)
});

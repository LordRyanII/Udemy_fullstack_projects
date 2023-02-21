const porta = 3010

const express = require('express');
const app = express()

//Rotas:

app.get('/produtos', (req, res, next) => { //Metódo middleware

    console.log('Middleware...')
    next() 
})


app.get('/produtos', (req, res, next) => { 
    res.send({nome: 'Notebook', preco: 123.45}) //Converte para JSON
})

/* Aqui ficará o servidor:*/

app.listen(porta, ()=> {
    console.log(`Servidor rodando na porta: ${porta}`)
})
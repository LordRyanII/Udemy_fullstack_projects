const porta = 3010

const express = require('express');
const app = express()

const bancoDeDados = require('./BancoDeDados')

//Rotas:

app.get('/produtos', (req, res, next) => { //Metódo middleware

    console.log('Middleware...')
    next() 
})


app.get('/produtos', (req, res, next) => { 
    res.send(bancoDeDados.getProdutos()) //Converte para JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

/* Aqui ficará o servidor:*/

app.listen(porta, ()=> {
    console.log(`Servidor rodando na porta ${porta}`);
})
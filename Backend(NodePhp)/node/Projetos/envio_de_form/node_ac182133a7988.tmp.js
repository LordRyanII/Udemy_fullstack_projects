const port = 3003
const express = require('express');
const app = express()

const bodyParser = require('body-parser'); //Para fazer parser no corpo da requisição
const { response } = require('express');

// Rotas: 

app.use(express.urlencoded({extended: true})) //Padrão

app.post('/usuarios', (req, res, next)=> {
    console.log(req.body)
    response.send('<h1> PARABÉNS </h1>')
})


app.listen(port)
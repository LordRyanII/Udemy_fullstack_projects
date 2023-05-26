const express = require('express');
const porta = 3000
const servidor = express();

// Query params = ?nome=NodeJS
// Route params = /curso/2
//Request body (corpo da requisição) = { nome: 'nodeJS', tipo: 'Backend' }

//localhost:3000/curso
servidor.get('/curso', (req, res)=> {
    return res.json({"curso":"node.js"})
})




servidor.listen(porta)


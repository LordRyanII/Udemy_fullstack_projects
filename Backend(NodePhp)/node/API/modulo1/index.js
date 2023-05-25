const express = require('express');
const porta = 3000
const servidor = express();

//localhost:3000/curso
servidor.get('/curso', (req, res)=> {
    return res.json({"curso":"node.js"})
})




servidor.listen(porta)


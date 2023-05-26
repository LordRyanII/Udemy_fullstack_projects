const express = require('express');
const porta = 3002;
const servidor = express();

// Query params = ?nome=NodeJS
// Route params = /curso/2
// Request body (corpo da requisição) = { nome: 'nodeJS', tipo: 'Backend' }

// localhost:3002/curso
servidor.get('/curso', (req, res) => {
    const id = req.query.nome;
    return res.json({ nome: `curso de: ${nome}` });
});

servidor.listen(porta);

//Para fazer a query params, basta digitar: localhost:3002/curso?nome=<nome que quiser>

const express = require('express');
const porta = 3002;
const servidor = express();

// Query params = ?nome=NodeJS
// Route params = /curso/2
// Request body (corpo da requisição) = { nome: 'nodeJS', tipo: 'Backend' }

// localhost:3002/curso/1
servidor.get('/curso/:id', (req, res) => {
    const id = req.params.id;
    return res.json({ curso: `curso: ${id}` });
});

servidor.listen(porta);

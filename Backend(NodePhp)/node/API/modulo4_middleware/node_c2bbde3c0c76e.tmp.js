const express = require('express');
const porta = 3001;
const servidor = express();

servidor.use(express.json()); //serve para usar o body-parser

const cursos = ['Node JS', 'JavaScript', 'React Native']; //Array de cursos

// Rotas:
// Read:
servidor.get('/cursos', (req, res) => {
    res.send(cursos); // Retorna todo o array de cursos
});

servidor.get('/cursos/:index', (req, res) => {
    const { index } = req.params; // Destructuring
    return res.json(cursos[index]); // Se passarmos um número, ele será usado como a posição dos elementos no array
});

// Create:
servidor.post('/cursos', (req, res) => {
    const { name } = req.body; // Recebe o corpo da requisição
    cursos.push(name);

    return res.json(cursos);
});

//PUT (update):
servidor.put('/cursos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;
    cursos[index] = name;
    return res.json(cursos);
});

//Delete

servidor.delete('/cursos/:index', (req, res) => {
    const { index } = req.params;
    cursos.splice(index, 1);

    return res.json(cursos);
})


servidor.listen(porta);

// https://localhost:3001/cursos
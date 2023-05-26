const express = require('express');
const porta = 3002;
const servidor = express();

//Armazenando dados provisoriamente

const cursos = ['Node JS', 'JavaScript', 'React Native']; //Array de cursos

servidor.get('/curso/:index', (req, res) => {
    const { index } = req.params; //Destructuring
    return res.json(cursos[index]); //se passarmos um número ele será usado como a posição dos elementos no array
});

servidor.listen(porta);


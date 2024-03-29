const express = require('express');
const porta = 3002;
const servidor = express();
servidor.use(express.json());
const body = require('body-parser')
servidor.use(body.urlencoded({extended: true }));

//Criando um CRUD
/* 
    Criar(C), Ler(R), fazer Update(U) e Deletar(D)
*/

const cursos = ['Node JS', 'JavaScript', 'React Native']; //Array de cursos

//Rotas:
//Read:
servidor.get('/cursos', (req, res) => {
    res.send(cursos); //Retorna todo o array de cursos
});

servidor.get('/cursos/:index', (req, res) => {
    const { index } = req.params; //Destructuring
    return res.json(cursos[index]); //se passarmos um número ele será usado como a posição dos elementos no array
});

//Create:
servidor.post('/cursos', (req, res) => {
    const { name } = req.body; //Recebe o corpo da requisição
    cursos.push(name);

    return res.json(cursos);

});

servidor.listen(porta);



// https://localhost:3002/cursos
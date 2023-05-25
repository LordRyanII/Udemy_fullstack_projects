// Diferença entre módulos internos e externos
//módulos internos e externos não é necessário referencias

const path = require('path'); //Não foi necessário passar o endereço (É nativo)
const axios = require('axios'); //Não foi necessário passar o endereço (É externo)

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data)) //axios é necessário usar response
    .catch(error => {
        console.log(error);
    });
const axios = require('axios');
const url = 'http://localhost:5000/produtos'

const dadosApi = (req) => {
    axios.get(url)
    .then(response => tratamentoApi(response.data))
    .catch(error => console.log('Sem dados'))
};

function tratamentoApi(obj){
    const dadosApi = obj
    const dadosProcessados = dadosApi.map(obj => {
        return obj.produto
    })
    return console.log(dadosProcessados.toString())
}

dadosApi() //Chamada Get

const enviaDados = (req) => {
    axios.post(url, {
        produto:'Café expresso',
        descricao: '500ml'
    })
    .then(response => imprime(response.data))
    .catch(error => console.log('Sem dados'))
};

function imprime(obj){
    const dadosApi = obj
    console.log(dadosApi)
}

enviaDados() //Chamada Post
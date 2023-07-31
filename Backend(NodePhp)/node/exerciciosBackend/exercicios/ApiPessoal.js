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


dadosApi()
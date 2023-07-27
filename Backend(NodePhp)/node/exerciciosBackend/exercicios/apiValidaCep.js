const axios = require('axios');

const cep = (cep) => {
    if (typeof cep === 'number') {
        const url = `https://brasilapi.com.br/api/cep/v1/${cep}`;
        try {
            axios.get(url)
                .then(response => console.log(response.data))
                .catch((error) => console.log("Erro: Cep não encontrado ou inválido"));
        } catch (error) {
            return console.log('Erro: Erro node.js');
        }
    } else {
        console.log('Erro: Formato de cep inválido')
    }

}

cep(92990000);
cep(19131243000197);
cep(22440032);


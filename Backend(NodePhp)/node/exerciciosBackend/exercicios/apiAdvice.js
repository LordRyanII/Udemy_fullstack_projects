const url = 'https://api.adviceslip.com/advice';
const axios = require('axios');


const exibeApi = () => {
    const exibeDados = setInterval(() => {
        const api = () => {
            axios.get(url)
                .then(response => {
                     console.log(response.data.slip.advice);
                })
                .catch((error) => console.log("Error nas dicas", error));
        }
        return api()
    }, 1000);

    const desliga = setTimeout(() => {
        clearInterval(exibeDados);
    }, 5000);

    return exibeDados;

};

exibeApi();
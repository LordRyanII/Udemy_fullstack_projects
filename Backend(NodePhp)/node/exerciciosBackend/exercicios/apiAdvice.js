const url = 'https://api.adviceslip.com/advice';
const axios = require('axios');

const api = () => {
    axios.get(url)
        .then(response => exibeApi(response.data)) //Axios transforma json em objeto nativamente
        .catch((error) => console.log("Error: ", error))
}

const exibeApi = (resposta) => {
    const fraseAleatoria = resposta['slip']['advice'];
    console.log(fraseAleatoria);
};

api();

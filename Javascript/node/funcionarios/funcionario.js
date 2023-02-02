/*Aprendendo a instalar o axios:
    1- no terminal: npm init -y > npm install --save axios
    
*/
/*Aprendendo a consumir dados .JSON:

    1- pegar a url do arquivo remoto.JSON
    2- E:
*/

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

const axios = require('axios')

axios.get(url).then(response =>{
    const funcionarios = response.data
    console.log(funcionarios)
})

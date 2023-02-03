const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const chineses = funcionaria => { //Vai retornar no lugar de funcionaria o valor true
    return funcionaria.pais === 'China'; // Para arrow functions é necessário um return
}
const mulher = funcionaria => {
    return funcionaria.genero === 'F';
}

const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual;
  };
  
//rota:

axios.get(url).then(response => {
  const funcionarios = response.data;
  console.log(funcionarios);

  // mulher chinesa com menor salário
  const func = funcionarios
    .filter(chineses)
    .filter(mulher)
    .reduce(menorSalario);

  console.log(`A ${func.nome} vive na ${func.pais}, é a nossa funcionária de menor salário ¥ ${func.salario}`);
});


// Alguns erros que cometi:

// Para arrow functions é necessário um return
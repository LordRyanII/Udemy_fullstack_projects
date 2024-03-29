// Escreva uma função que verifique se uma palavra fornecida pelo usuário é um palíndromo (ou seja, pode ser lida da mesma forma de trás para frente). Exiba uma mensagem indicando o resultado.Escreva uma função que verifique se uma palavra fornecida pelo usuário é um palíndromo (ou seja, pode ser lida da mesma forma de trás para frente). Exiba uma mensagem indicando o resultado.

function verificaNome(nome) {
    let nomeMinusculo = nome.toLowerCase(); //converte para minúscula
    let tamanho = nomeMinusculo.length; //comprimento
    
    if (typeof nome === 'string') {
      let nomeReverso = nomeMinusculo.split('').reverse().join('');
      
      if (nomeMinusculo === nomeReverso) {
        return `${nome} pode ser lido de trás para frente.`;
      } else {
        return `${nome} não pode ser lido de trás para frente.`;
      }
    }
  }
  

console.log(verificaNome('ANA'))
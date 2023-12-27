//Escreva uma função que encontre o maior número em um array.

const arrayMaior = (...numeros: number[]):any => {
  const dadoFormatado = numeros.reduce((maior, numero) => {
    return numero > maior ? numero : maior;
  }, numeros[0]);

  return console.log(dadoFormatado);
};

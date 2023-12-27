//Escreva uma função que inverta uma string.

const stringReverse = (nome: string): string => {
  const palavraFormatada: string = nome.split("").reverse().join("");

  return `Assim é o nome ${nome} com as palavras invertidas: ` + palavraFormatada;
};


console.log(stringReverse('Ryan'));
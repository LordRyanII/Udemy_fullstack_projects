//Escreva uma função que determine se uma palavra é um palíndromo.

const verificaPalindromo = (palavra: string): string => {
    const palavraReverse = palavra.toLocaleLowerCase().split('').reverse().join('');
    return palavra.toLocaleLowerCase() === palavraReverse? `A palavra ${palavra} é um palíndromo`: `A palavra ${palavra} NÃO é um palíndromo`;

};
 
console.log(verificaPalindromo('Ryan'));
console.log(verificaPalindromo('Ana'));
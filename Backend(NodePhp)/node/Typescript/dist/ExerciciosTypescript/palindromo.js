"use strict";
//Escreva uma função que determine se uma palavra é um palíndromo.
var verificaPalindromo = function (palavra) {
    var palavraReverse = palavra.toLocaleLowerCase().split('').reverse().join('');
    return palavra.toLocaleLowerCase() === palavraReverse ? "A palavra ".concat(palavra, " \u00E9 um pal\u00EDndromo") : "A palavra ".concat(palavra, " N\u00C3O \u00E9 um pal\u00EDndromo");
};
console.log(verificaPalindromo('Ryan'));
console.log(verificaPalindromo('Ana'));

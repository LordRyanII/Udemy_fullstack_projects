"use strict";
//Crie uma função que conte o número de caracteres em uma string.
var contador = function (palavra) {
    return "A palavra ".concat(palavra, " cont\u00E9m: ").concat(palavra.length, " caracteres");
};
var nome = 'Ryan';
console.log(contador(nome));
console.log(contador('Adalberto'));

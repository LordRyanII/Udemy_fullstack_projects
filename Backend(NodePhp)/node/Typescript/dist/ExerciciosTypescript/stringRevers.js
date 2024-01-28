"use strict";
//Escreva uma função que inverta uma string.
var stringReverse = function (nome) {
    var palavraFormatada = nome.split("").reverse().join("");
    return "Assim \u00E9 o nome ".concat(nome, " com as palavras invertidas: ") + palavraFormatada;
};
console.log(stringReverse('Ryan'));

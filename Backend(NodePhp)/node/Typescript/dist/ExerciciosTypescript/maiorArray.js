"use strict";
//Escreva uma função que encontre o maior número em um array.
var arrayMaior = function () {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    var dadoFormatado = numeros.reduce(function (maior, numero) {
        return numero > maior ? numero : maior;
    }, numeros[0]);
    return console.log(dadoFormatado);
};

"use strict";
var nomeContrario = function () {
    var nomes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nomes[_i] = arguments[_i];
    }
    var dadosFormatado = nomes.map(function (nome) {
        var nomeString = nome.toString();
        return nomeString.toLocaleLowerCase().split("").reverse().join("");
    });
    return dadosFormatado.toString();
};
console.log(nomeContrario("Ryan", "Renata")); //Retorno: nayr,ataner
console.log('Ryan'.split("").reverse());

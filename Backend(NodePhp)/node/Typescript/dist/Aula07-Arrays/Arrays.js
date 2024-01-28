"use strict";
//Tipo Array: <T> generyc  | T[]
function multiplicaArgumentos() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (multiplicacao, valor) { return multiplicacao * valor; }, 1);
}
function concatenaStrings() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (valor1, valor2) { return valor1 + valor2; });
}
var result = multiplicaArgumentos(10, 50, 40, 100);
var palavras = concatenaStrings('Ryan', ' Renata');
console.log(result);
console.log(palavras);

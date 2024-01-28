"use strict";
//Implemente um objeto que represente uma calculadora com funções para adição, subtração, multiplicação e divisão.
Object.defineProperty(exports, "__esModule", { value: true });
var Calculadora = function (objetos) {
    var numero1 = objetos.numero1, numero2 = objetos.numero2, simbolo = objetos.simbolo;
    if (simbolo === "+") {
        var resultado = numero1 + numero2;
        return "Soma igual a ".concat(resultado);
    }
    else if (simbolo === "-") {
        var resultado = numero1 - numero2;
        return "Subtra\u00E7\u00E3o igual a ".concat(resultado);
    }
    else if (simbolo === "*") {
        var resultado = numero1 * numero2;
        return "Multiplica\u00E7\u00E3o igual a ".concat(resultado);
    }
    else {
        return "Insira um valor";
    }
};
var objetoSoma = {
    numero1: 5,
    numero2: 10,
    simbolo: "+",
};
var objetoSubtracao = {
    numero1: 25,
    numero2: 10,
    simbolo: "-",
};
console.log(Calculadora(objetoSoma));
console.log(Calculadora(objetoSubtracao));
exports.default = Calculadora;

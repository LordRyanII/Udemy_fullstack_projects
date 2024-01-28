"use strict";
function parImpar() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    var numerosFormatados = numeros.map(function (obj) {
        if (obj % 2 === 0) {
            return "".concat(obj, " \u00E9 Par");
        }
        else {
            return "".concat(obj, " \u00E9 Impar");
        }
    });
    return console.log(numerosFormatados);
}
;
parImpar(10, 50, 6526, 78, 73, 25, 77);

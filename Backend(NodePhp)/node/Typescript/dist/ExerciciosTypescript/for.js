"use strict";
var retornaArray = function () {
    var dados = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        dados[_i] = arguments[_i];
    }
    var nomes = dados;
    var tamanhoArray = dados.length;
    var estado = 'true';
    var inicio = 0;
    var _loop_1 = function () {
        if (inicio < tamanhoArray) {
            var tempInicio_1 = inicio;
            setTimeout(function () {
                console.log("Nome ".concat(tempInicio_1, ": ").concat(nomes[inicio++]));
            }, 1000); // Adicionei esta linha
        }
        ;
        return "break";
    };
    while (estado) {
        var state_1 = _loop_1();
        if (state_1 === "break")
            break;
    }
    ;
};
retornaArray('Ryan', 'Renata', 'De Paollo');

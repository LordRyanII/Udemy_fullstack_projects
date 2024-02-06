"use strict";
var Cachorro = /** @class */ (function () {
    function Cachorro(nome, sexo) {
        this.nome = nome;
        this.sexo = sexo;
    }
    Cachorro.prototype.caracteristicasCachorro = function () {
        return {
            Nome: this.nome,
            Sexo: this.sexo,
        };
    };
    return Cachorro;
}());
var cachorroNelson = new Cachorro("Nelson", "Masculino");
var cadelaVirgnia = cachorroNelson.nome = 'Virgnia';
console.log(cadelaVirgnia);

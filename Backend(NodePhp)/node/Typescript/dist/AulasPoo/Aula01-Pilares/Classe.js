"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colaborador = exports.Empresa = void 0;
var Empresa = /** @class */ (function () {
    function Empresa(nome, cnpj) {
        this.colaboradores = [];
        this.nome = nome;
        this.cnpj = cnpj;
    }
    Empresa.prototype.adicionaColaborador = function (colaborador) {
        this.colaboradores.push(colaborador);
    };
    Empresa.prototype.mostrarColoboradores = function () {
        for (var _i = 0, _a = this.colaboradores; _i < _a.length; _i++) {
            var colaborador = _a[_i];
            console.log("Nome: ".concat(colaborador.nome));
        }
    };
    return Empresa;
}());
exports.Empresa = Empresa;
var Colaborador = /** @class */ (function () {
    function Colaborador(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    return Colaborador;
}());
exports.Colaborador = Colaborador;
var empresa1 = new Empresa("Udemy", "221.1770.00001");
console.log(empresa1);
var colaborador1 = new Colaborador("Ryan", "Menezes");
var colaborador2 = new Colaborador("Roberto", "Miranda");
var colaborador3 = new Colaborador("Ana", "Júlia");
var colaborador4 = new Colaborador("Renata", "Alves");
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
empresa1.adicionaColaborador(colaborador4);
console.log(empresa1);
empresa1.mostrarColoboradores();

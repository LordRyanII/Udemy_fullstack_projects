"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = exports.Aluno = void 0;
var Pessoa1 = /** @class */ (function () {
    function Pessoa1(nome, sobrenome, idade, cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.cpf = cpf;
    }
    Pessoa1.prototype.getIdade = function () {
        return this.idade;
    };
    Pessoa1.prototype.getCpf = function () {
        return this.cpf;
    };
    Pessoa1.prototype.getNomeCompleto = function () {
        return this.nome + this.sobrenome;
    };
    return Pessoa1;
}());
;
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Aluno.prototype.getTabelaAlunos = function () {
        var objetoTabela = {
            Nome: this.nome,
            Sobrenome: this.sobrenome,
            Cpf: this.cpf
        };
        return console.table(objetoTabela);
    };
    ;
    return Aluno;
}(Pessoa1));
exports.Aluno = Aluno;
;
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cliente;
}(Pessoa1));
exports.Cliente = Cliente;
;
var aluno = new Aluno('Linus', 'Torvalds', 30, '123.144.150-09');
aluno.getTabelaAlunos();

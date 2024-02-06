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
var Pessoa1 = /** @class */ (function () {
    function Pessoa1(nome, idade) {
        this.Nome = nome;
        this.Idade = idade;
    }
    Pessoa1.prototype.NomeCompleto = function () {
        return "".concat(this.Nome, " tem ").concat(this.Idade, " anos.");
    };
    return Pessoa1;
}());
var Habilidades = /** @class */ (function (_super) {
    __extends(Habilidades, _super);
    function Habilidades(nome, idade, profissao, habilidades) {
        var _this = _super.call(this, nome, idade) || this;
        _this.Profissao = profissao;
        _this.Habilidade = habilidades;
        return _this;
    }
    Habilidades.prototype.MostrarHabilidades = function () {
        return "O ".concat(this.Nome, ", tem ").concat(this.Idade, "anos e, \u00E9 um ").concat(this.Profissao, ", possui a habilidade de ").concat(this.Habilidade, ".");
    };
    return Habilidades;
}(Pessoa1));
var pessoa = new Pessoa1("Ryan", 22);
console.log(pessoa.NomeCompleto());
var habilidade = new Habilidades("Ryan", 22, "Desenvolvedor", "Node.js");
console.log(habilidade.MostrarHabilidades());
exports.default = Pessoa1;

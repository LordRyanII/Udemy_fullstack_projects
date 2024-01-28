"use strict";
//Crie um objeto representando uma pessoa e acesse suas propriedades.
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa = {
    nome: "Ryan",
    sobrenome: 'Menezes',
    idade: 21
};
console.log("O ".concat(pessoa.nome, " ").concat(pessoa.sobrenome, " tem ").concat(pessoa.idade));
exports.default = pessoa;

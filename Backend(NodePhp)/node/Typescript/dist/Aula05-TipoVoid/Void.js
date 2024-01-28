"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function semRetorno() {
    console.log("Sem retorno");
} // Exemplo de função sem retorno, eu não preciso usar o return;
function lista() {
    var dados = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        dados[_i] = arguments[_i];
    }
    var listaItens = dados.join(" ");
    console.log(listaItens);
}
lista("arroz", "Feijão", "Leite");
var pessoas = {
    nome: "Renata",
    sobrenome: "Alves",
    exibirNome: function () {
        console.log("".concat(this.nome, " ").concat(this.sobrenome));
    },
};
pessoas.exibirNome();
exports.default = { pessoas: pessoas };

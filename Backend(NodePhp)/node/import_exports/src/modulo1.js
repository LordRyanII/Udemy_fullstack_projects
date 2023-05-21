const nome = 'Renata';
const sobrenome = 'Alves';
const idade = 30;

function soma(x,y){
    return x+y
};

export default class Pessoa {
    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
};

//se digitar export { nome (variavel) as nome2 }
//nome2 que será usado no import

export { nome, sobrenome, idade, soma, Pessoa};  
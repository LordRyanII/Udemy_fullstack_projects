const {Pessoa } = require('./mod2');

const p1 = new Pessoa('Ryan', 21, 'Menezes');

console.log(p1)


const {nome, sobrenome, falaNome, Validahoras}= require('./app'); //usando destructuring

console.log(nome); //lista o nome
console.log(falaNome()); //lista a arrow function que concatena o nome e sobrenome
console.log(sobrenome); //lista apenas o sobrenome
console.log(Validahoras) //lista a classe



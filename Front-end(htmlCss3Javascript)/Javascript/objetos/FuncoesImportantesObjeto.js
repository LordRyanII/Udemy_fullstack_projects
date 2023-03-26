// Funções Importantes dos objetos:

const Pessoa = {
    nome: 'Rebeca',
    idade: 13 + ' Anos',
    peso: 60
}

console.log(Object.keys(Pessoa))//Irá pegar apenas as chaves;
console.log(Object.values(Pessoa))//Irá pegar apenas os valores;

console.log(Object.entries(Pessoa))//Retorna o objeto como um Array

// Percorrendo o Array de um objeto:

Object.entries(Pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
}) //Retorna em forma de array

// Adicionando Propriedades no Objeto:

Object.defineProperty(Pessoa, 'DataNascimento', {
    enumerable: true, //'Será listado no objeto? true (sim)'
    writable: false, //'Poderá ser subscrito? false (não)'
    value: '01/05/2019' //Valor
}) //Adiciona a chave (key) 'DataNascimento' ao objeto pessoa

console.log(Object.keys(Pessoa))//Exibe

// Concatenando Objetos:

const destino = {
    a: 1,
    b: 3
}
const a = {
    c: 5,
    d: 7
}
const b = {
    e: 9,
    f: 11
}

const res = Object.assign(destino, a, b) //Assign concatena mais de um objeto

console.log(res) //Resultado da concatenação dos Objetos

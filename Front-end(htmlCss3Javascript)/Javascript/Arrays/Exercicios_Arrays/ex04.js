// Dado um array de objetos representando pessoas com as propriedades "nome" e "idade", retorne um novo array com   os nomes das pessoas maiores de idade.
// Exemplo de entrada: [{ nome: "João", idade: 18 }, { nome: "Maria", idade: 25 }, { nome: "Pedro", idade: 15 }]
// Exemplo de saída: ["João", "Maria"]

const dados = [
    { nome: "João", idade: 18 },
    {nome: "Maria", idade: 25 },
    {nome: "Pedro", idade: 15 },
];

const MaioresDeIdade = dados.filter(obj => {

    return obj.idade >= 18

});

console.log(MaioresDeIdade);
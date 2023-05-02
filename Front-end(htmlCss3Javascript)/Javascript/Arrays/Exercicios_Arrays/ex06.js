// Dado um array de objetos representando produtos com as propriedades "nome" e "preço", retorne um novo array com os produtos que custam mais de R$ 50,00.
// Exemplo de entrada: [{ nome: "Notebook", preço: 3000 }, { nome: "Mouse", preço: 25 }, { nome: "Monitor", preço: 600 }]
// Exemplo de saída: [{ nome: "Notebook", preço: 3000 }, { nome: "Monitor", preço: 600 }]

const produtos = [
    { nome: "Notebook", preço: 3000 },
    { nome: "Mouse", preço: 25 },
    { nome: "Monitor", preço: 600 }
];

const ProdutosAcima = produtos.filter(obj => {
    return obj.preço > 50;
});

console.log(ProdutosAcima);
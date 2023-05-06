const produtos = new Object();
produtos.tipo = 'Notebook';
produtos['preço'] = 'R$' + 1500;

console.log(Object.keys(produtos));
console.log(Object.values(produtos));
console.log(Object.entries(produtos));

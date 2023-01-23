function Produtos() {
    return [
        {codigo: 100, descricao: 'Cachorro-quente', preco: 3.00},
        {codigo: 200, descricao: 'hamburguer-simples', preco: 4.00},
        {codigo: 300, descricao: 'cheeseburguer', preco: 5.50},
        {codigo: 400, descricao: 'bauru', preco: 7.50},
        {codigo: 500, descricao: 'refrigerante', preco: 3.50},
        {codigo: 600, descricao: 'suco', preco: 2.80},
    ]
}

function consultaValor(codigo) {
    let valores = Produtos();

    valores.forEach((element, index) => {
        if(element.codigo === codigo) {
            return console.log(`Produto encontrado é ${element.descricao}, o seu preço é R$${element.preco}`)
        }
    });
   
}

console.log(consultaValor(100));
console.log(consultaValor(200));
console.log(consultaValor(300));
console.log(consultaValor(400));

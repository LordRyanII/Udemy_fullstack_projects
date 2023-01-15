//modos de juntar duas funções:

/*Function sem os metódos call e aply:*/

function getPreco(imposto= 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
    Nome: 'Notebook',
    preco: 4000,
    desconto: 0.5,
    getPreco
}

console.log(produto.getPreco())

/*Com call e aply*/

const carro = {
    preco: 49990,
    desconto: 0.20
}

console.log(getPreco.call(carro));//com call
console.log(getPreco.apply(carro))//com aply

console.log(getPreco.call(carro, 0.17, 'U$')) //passando em dolar,
//Apenas com o call, é possível alterar os paramêtros de uma função
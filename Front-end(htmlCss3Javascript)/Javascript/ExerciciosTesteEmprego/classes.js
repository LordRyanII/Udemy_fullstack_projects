class Pizzaria {
    constructor(nome, ...produtos){
        this.nome = nome;
        this.produtos = produtos;
    }
    adicionarProduto() {
        const items = [];

        items.push(this.produtos);

        return items
    }
    notaFiscal(){
        return console.log(`Pizzaria Ramos, cliente: ${this.nome}, pedidos: ${this.adicionarProduto()} total de pedidos: ${this.produtos.length}`);
    }
}

const pizzariaRamos = new Pizzaria('Claudio', "Pepperoni", 'Calabresa', 'Mussarela');

pizzariaRamos.notaFiscal()
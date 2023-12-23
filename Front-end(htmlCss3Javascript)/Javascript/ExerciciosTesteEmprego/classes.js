class Cliente {
    constructor(nome, email, celular) {
        this.Nome = nome;
        this.Email = email;
        this.Celular = celular;
    }

    infoCadastro() {
        return {
            Nome: this.Nome,
            Email: this.Email,
            Celular: this.Celular
        };
    }
}

class Pizzaria extends Cliente {
    constructor(nome, email, celular, ...produtos) {
        super(nome, email, celular);
        this.produtos = produtos;
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    notaFiscal() {
        console.log(`Pizzaria Ramos, cliente: ${this.Nome}, email: ${this.Email},Celular: ${this.celular} pedidos: ${this.produtos.join(', ')} total de pedidos: ${this.produtos.length}`);
    }
}

const pizzariaRamos = new Pizzaria('Claudio', 'cliente@email.com', '123456', 'Pepperoni', 'Calabresa', 'Mussarela');

pizzariaRamos.adicionarProduto('Margherita');
pizzariaRamos.notaFiscal();
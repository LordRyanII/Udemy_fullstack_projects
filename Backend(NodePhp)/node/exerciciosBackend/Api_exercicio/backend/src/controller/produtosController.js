class Produtos {
    constructor(...produtos) {
        this._produtos = produtos;
        this.id = 0
        
    }

    listarProdutos() {
        const idProdutos = this.id ++
        const produtos = {
            _id: idProdutos,
            produtos: this._produtos // Renomeie o campo para "produtos"
        };
        return produtos;
    }

    dadosVazios() {
        return {
            message: 'Não existem registros no banco.'
        };
    }
}

let produtosCriados = []; // Variável para armazenar os produtos criados

// Função para listar os produtos
exports.listarProdutos = (req, res, next) => {
    const produtos = new Produtos(...produtosCriados); // Passa a lista de produtos criados como argumento
    if (produtosCriados.length === 0) {
        return res.send(produtos.dadosVazios());
    } else {
        return res.send(produtos.listarProdutos());
    }
};


// Função para criar um novo produto
exports.criarDados = (req, res) => {
    const { name } = req.body;
    const produtos = new Produtos(name); // Se estiver criando um novo produto, precisa passar o nome como parâmetro
    produtosCriados.push(...produtos._produtos); // Adiciona os produtos criados à variável de produtosCriados
    res.status(200).send({Success: 'code 200'}); // Enviando uma resposta de sucesso

    return produtos;
};

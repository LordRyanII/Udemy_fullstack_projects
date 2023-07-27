class Produtos {
    constructor(...produtos) {
        this._produtos = produtos;
    }
    listarProdutos() {
        const produtos = {
            _id: 1234567890,
            produtos: this._produtos // Renomeie o campo para "produtos"
        };
        return produtos;
    }
}

// Função para listar os produtos
exports.listarProdutos = (req, res, next) => {
    const produtos = new Produtos();
    return res.send(produtos.listarProdutos());
};

// Função para criar um novo produto
exports.criarDados = (req, res) => {
    const { name } = req.body;
    const produtos = new Produtos(name); // Se estiver criando um novo produto, precisa passar o nome como parâmetro
    res.status(200).send('Success: code 200'); // Enviando uma resposta de sucesso
};


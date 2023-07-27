exports.itens = (req, res, next) => {
    const produtos = new Produtos();
    return res.send(produtos.listarProdutos());
};
exports.criarDados = (req, res) => {
    const produtos = new Produtos(req.body);
    res.send('Sucess:' + res.status(200))
    return res.send(produtos.listarProdutos)
}
class Produtos {
    constructor(...produtos) {
        this._produtos = produtos; // Use o parâmetro spread para inicializar _produtos
    }
    listarProdutos() {
        const produtos = {
            _id: 1234567890,
            produto: this._produtos
        };
        return produtos; // Adicione uma declaração de retorno para retornar o objeto produtos
    }
}

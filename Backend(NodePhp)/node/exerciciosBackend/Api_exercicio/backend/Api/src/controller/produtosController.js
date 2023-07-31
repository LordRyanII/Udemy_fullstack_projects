const ProdutoModel = require('../models/produtosModels');

class ProdutosController {
    constructor() {}

    async listarProdutos(req, res, next) {
        try {
            const produtos = await ProdutoModel.find();
            if (produtos.length === 0) {
                return res.send(this.dadosVazios());
            } else {
                return res.send(produtos);
            }
        } catch (err) {
            console.error('Erro ao listar produtos:', err);
            res.status(500).send({
                error: 'Erro ao listar produtos.'
            });
        }
    }

    dadosVazios() {
        return {
            message: 'Não existe registro no banco.'
        };
    }

    async criarDados(req, res) {
        const { produto, descricao } = req.body;

        try {
            const novoProduto = new ProdutoModel({ produto, descricao });
            await novoProduto.save();
            res.status(201).send({ success: 'Produto criado com sucesso.' });
        } catch (err) {
            console.error('Erro ao criar produto:', err);
            res.status(500).send({ error: 'Erro ao criar produto.' });
        }
    }
}

module.exports = new ProdutosController();

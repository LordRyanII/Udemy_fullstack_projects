// Para pegar os ids dos objetos:

const sequence = {
    _id: 1,
     get id(){
        return this._id++
    }
} // Esse get é uma função Getter, que retorna o valor do id que é um, e vai para sequência

const produto = {}

// Lógica:

function salvarProduto(produto){
    if(!produto.id){
        produto.id = sequence.id
        produto[produto.id] = produto

        return produto
    }
}

// Pega o produto por id:

function getProduto(id){
    return produto[id] || {}
}

// Retorna todos os produtos:

function getProdutos(){
    return Object.values(produto)
}

// Deixando as funções visivéis fora do módulo

module.exports = {
    salvarProduto,
    getProduto,
    getProdutos
}
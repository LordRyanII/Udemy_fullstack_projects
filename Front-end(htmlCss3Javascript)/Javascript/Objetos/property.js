// defineProperty()  -  defineProperties()

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
    });
};

const produto1 = new Produto('Camiseta', 20, 3);
console.log(produto1)
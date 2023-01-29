// Forma literal:

const ob1 = {}
console.log(ob1);

// Com função construtora
const objet1 = new Object();
console.log(ob1);

// Criando objeto através da função construtora

function Produto(nome, preco, desc){
    this.nome = nome
    this.getProdutoComDesconto = () =>{
        return preco * (1- desc)
    }
}

const Res1 = new Produto('Caneta', 7.99, 0.15); //Instancia e passa os paramêtros
console.log(Res1.getProdutoComDesconto()) //Retorna o preço com desconto

// Criando Objeto com a função Factory:

function CriarFuncionario(nome, salarioBase, falta){
    return {
        nome,
        salarioBase,
        falta,
        getSalario() {
            return (salarioBase / 30) * (30 - falta)
        }
    }
}

const user = CriarFuncionario('João Claudio', 1500, 3);
const user2 = CriarFuncionario('Fernanda', 3500, 5) 

console.log(user.getSalario()); //Retorna o salário descontado
console.log(user2.getSalario())//Retorna o salário descontado
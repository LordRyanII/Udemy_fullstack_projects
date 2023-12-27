//Crie um objeto representando uma pessoa e acesse suas propriedades.


const pessoa: {
    nome: string,
    sobrenome: string,
    idade: number
} = {
    nome:"Ryan",
    sobrenome:'Menezes',
    idade: 21
    
};

console.log(`O ${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade}`);

export default pessoa
//Crie um objeto representando uma pessoa e acesse suas propriedades.


const pessoa = (nome, sobrenome, idade, profissao) => {
    
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        caracteristicas: {
            profissao: profissao
        }
    }
}

console.log(pessoa('Ryan', 'Menezes', 21, 'Programador'));
const dados = pessoa('Ryan', 'Menezes', 21, 'Programador')
console.log(`Me chamo ${dados.nome} e tenho ${dados.idade}, e sou ${dados.caracteristicas.profissao}`);
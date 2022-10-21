//Aprendendo Destructuring

const Pessoa = {
    Nome: 'Renata',
    Idade: 19 + 'anos',
    'Endereço': {
        Logradouro: 'R. Nova petropólis',
        'Número': 1139
    }
}

const {Nome, Idade} = Pessoa // cria variavéis com os objetos extraidos
console.log(Nome, Idade)

console.log(Nome) //com o destructuring
console.log(Pessoa.Endereço) //Sem o destructuring  

//Atribuindo com o destruturing

const {Sobrenome = true} = Pessoa // criou uma variavél que só pode ser verdadeira ou falsa (True and False)
console.log(Sobrenome)

//Extraindo de um objeto que possuí um objeto

const {Endereço:{Logradouro, Número}} = Pessoa // Extrai do objeto "Endereço" o Logaradouro e número, que estão dentro do objeto "Pessoa"
console.log(Logradouro, Número)

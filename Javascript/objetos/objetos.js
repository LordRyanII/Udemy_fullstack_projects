// Relembrando objetos:

const carro = {
    proprietario: {
        nome: 'Renata',
        idade: 19 + ' Anos',
        endereco: {
            logradouro: 'Rua Nova Petropólis',
            numero: 1139
        }
    },
    condutores: {
        nome: 'Ryan',
        idade: 20 + ' Anos',
        endereco: {
            logradouro: 'Trav. Nestor Jardim Filho',
            numero: 02
        }
    }

}
console.log(carro)

// manipulando objetos:

carro.proprietario.endereco.logradouro = 'Casa do Ryan, esquina amor da minha vida'; //Altera o endereço
carro.proprietario.endereco.numero = 00; //Altera o número do caminho especificado

console.log(carro) //Saída

delete carro.condutores //Deleta o objeto do caminho, no caso 'Condutores'

console.log(carro) //Saída  
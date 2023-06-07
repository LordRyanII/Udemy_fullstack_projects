// Exercício de soma:
// Escreva um programa que solicite ao usuário dois números e exiba a soma deles.

const soma = (a, b) => {
    if(typeof a === 'string' || typeof b === 'string'){
        return console.log('Não é um número');
    }else{
        return a + b
    }
}

console.log(soma(10, 20));
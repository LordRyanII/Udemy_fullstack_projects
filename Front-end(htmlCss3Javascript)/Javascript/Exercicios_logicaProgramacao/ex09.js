// Exercício de soma de elementos:
// Escreva uma função que receba um array de números e retorne a soma de todos os elementos.

function Soma(...n1) {
    let soma = 0;
    
    for (let i = 0; i < n1.length; i++) {
        soma += n1[i];
    }

    return soma;
}

console.log(Soma(10, 20, 50, 30));

// Escreva uma função que receba dois números como parâmetros e retorne o maior deles.

const maior = (n1, n2) => {
    const numberMaior = n1 >= n2? n1 : n2
    return numberMaior
};

console.log(maior(60,97));
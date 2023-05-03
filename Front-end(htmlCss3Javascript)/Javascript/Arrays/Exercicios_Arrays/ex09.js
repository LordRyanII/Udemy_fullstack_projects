// Crie uma função que receba um array de números e retorne a soma de todos eles.

function Soma(...args) {

    const array = Array(...args);

    return array.map(n => n + n);
};

console.log(Soma(0, 1, 2 , 5));
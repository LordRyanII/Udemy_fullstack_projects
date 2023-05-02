// Dado um array de números, retorne um novo array com os valores duplicados.
// Exemplo de entrada: [1, 2, 3, 4, 5]
// Exemplo de saída: [2, 4, 6, 8, 10]

const numeros = [1, 2, 3, 4, 5];

const Dobro = numeros.map(obj => {
    return obj * 2;

});

console.log(Dobro);
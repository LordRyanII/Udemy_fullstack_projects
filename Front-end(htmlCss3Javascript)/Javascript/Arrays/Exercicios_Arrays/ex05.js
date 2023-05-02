// Dado um array de números, retorne um novo array com os valores pares.
// Exemplo de entrada: [1, 2, 3, 4, 5, 6]
// Exemplo de saída: [2, 4, 6]

const numeros = [1, 2, 3, 4, 5, 6];

const DivisaonumerosPares = numeros.map(obj => {
    
    return obj % 2 === 0 ? obj : null;
});

const numerosPares = DivisaonumerosPares.filter(obj => {

    return obj != null
});


console.log(numerosPares);
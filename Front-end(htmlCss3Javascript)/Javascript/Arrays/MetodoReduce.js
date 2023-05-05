// Reduce => ideal para reduzir o Array em um!

// Some todos os valores:

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulador, valor, index, Array) => {
    return acumulador + valor;
});

console.log(total)
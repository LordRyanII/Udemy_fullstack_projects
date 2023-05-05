//Retorne apenas o dobro

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = numeros.map(numero => {
    return numero % 2 === 0 ? numero : null

});

const resultadoPares = numerosPares.filter(obj => {
    return obj != null
});

console.log(resultadoPares);

const dobro = resultadoPares.map(numeros => {
    return numeros * 2
});

console.log(dobro);

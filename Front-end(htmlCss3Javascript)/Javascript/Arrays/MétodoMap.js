//Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map(function(valor){
    //retorna o valor EM DOBRO
    return valor * 2
});

console.log(numerosEmDobro)
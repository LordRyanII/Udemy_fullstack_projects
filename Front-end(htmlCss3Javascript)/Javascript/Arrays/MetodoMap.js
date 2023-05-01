//Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map(function (valor) {
    //retorna o valor EM DOBRO
    return valor * 2

});

console.log(numerosEmDobro)


function retornaDobro(numero1) {

    const dadoUsuario = numero1;
    return dadoUsuario > 5 ? 'É maior que 5' : 'É menor que 5'
}

console.log(retornaDobro(10));


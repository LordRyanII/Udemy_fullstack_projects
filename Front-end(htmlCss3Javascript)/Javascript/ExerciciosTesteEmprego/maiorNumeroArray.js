//Escreva uma função que encontre o maior número em um array.

const maiorNumero = (...numeros) => {
    const maior = numeros.reduce((numero, propriedade) => {
        return numero > propriedade? numero: propriedade //Retorna o maior número do arrray
    })

    return maior

}

console.log(maiorNumero(50,100,250,1000))
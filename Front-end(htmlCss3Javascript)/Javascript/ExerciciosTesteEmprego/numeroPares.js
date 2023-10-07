//Crie uma função que filtre todos os números pares de um array.

const filtro = (...numeros) => {
    const pares = numeros.filter(obj => {
        return obj % 2 === 0
    })

    return pares.toString()
}

console.log(filtro(2,4,10,11,15,8,333))
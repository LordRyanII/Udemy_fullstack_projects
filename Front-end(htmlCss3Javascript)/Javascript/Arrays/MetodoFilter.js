//Filter é muito importante! 
// Retorne os números > 10

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosMaiores = numeros.filter(indice => {
    return indice > 10
})

console.log(numerosMaiores)

// Retorne os números < 10

function CallbacknumerosMenores(valor, indice, array){
    if(valor < 10){
        return true
    } else {
        return false
    }
}

const numerosMenores = numeros.filter(CallbacknumerosMenores)

console.log(numerosMenores)

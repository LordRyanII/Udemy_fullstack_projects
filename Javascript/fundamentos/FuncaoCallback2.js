const notas =[7.7, 8.8, 4.5, 6, 5.5, 3.6, 10]

//Sem callback:

let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
} //função filtra as notas baixas e adiciona no array vazio

console.log(notasBaixas)

//com callback

const notasAltas= notas.filter(function (notas){
    return notas > 7
})

console.log(notasAltas)

//Com callback e arrow

const notasBaixas2 = notas.filter(notas => {
    return notas < 7
})

console.log(notasBaixas2.sort()) //retorna de forma ordenada a nota baixa
const fabricantes = ["Mercedes", "Audi", "Bmw"]

function ImprimeResultado(nome, indice){
    console.log(`${indice + 1}.${nome}`)
}


//Usando o callback
fabricantes.forEach(fabricantes => {
    return console.log(fabricantes) //nova função
})

fabricantes.forEach(ImprimeResultado) //retorna apenas a função
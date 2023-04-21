// Podemos passar objetos literais, por meio da destruturação

function dados({ nome, sobrenome, idade}){

    return console.log(nome, sobrenome, idade)
}

dados({ nome:'Ryan', sobrenome:'Menezes', idade: 20})

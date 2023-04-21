// Podemos passar objetos literais, por meio da destruturação
/*A
function dados({ nome, sobrenome, idade}){

    return console.log(nome, sobrenome, idade)
}

const obj = {
    nome: 'Renata',
    sobrenome: 'Alves Da Luz',
    idade: 20
}
dados(obj)
*/

function Array([ valor1, valor2, valor3 ]){

    return console.log(valor1, valor2, valor3)
}

Array(['Cacho de uva,', 'Pé de banana,', 'Raízes de mandioca'])
const notas = [ 2.5, 5.5, 6.0 , 7.1 , 8.2 , 9.9 , 10]

for (let valor in notas){
    console.log(`${valor} = ${notas}`)
} //metódo não eficiente de percorrer um array

const usuario = {
    Nome: 'Ryan',
    Sobrenome: 'Oliveira De Menezes',
    Idade: 20
}

for(let atributo in usuario){
    console.log(`Dados do usuario: ${atributo} = ${usuario[atributo]}`)
} //metódo para percorrer um objeto, forma ideal também
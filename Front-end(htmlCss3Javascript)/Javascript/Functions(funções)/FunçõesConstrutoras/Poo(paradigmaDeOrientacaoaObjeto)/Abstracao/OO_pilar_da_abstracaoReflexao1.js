// Um software de marcenária

/*Paradigma Procedual:*/

//Uma cadeira

const cadeira = Array()
cadeira[0] = Array()
cadeira[0]['qtdePernas'] = 4
cadeira[0]['giratoria'] = false
cadeira[0]['cor'] = 'azul'

cadeira[1] = Array()
cadeira[1]['qtdePernas'] = 1
cadeira[1]['giratoria'] = true
cadeira[1]['cor'] = 'vermelho'

function girar_Cadeira(){
    if(cadeira[1]['giratoria'] === true){
        console.log('É Giratória')
    }else{
        console.log('Não é giratória')
    }
}
console.log(cadeira)
girar_Cadeira() //Retorna 'Não é giratória'  => não é necessário console.log quando se já tem na função

function addCadeira(qtdePernas, giratoria, cor){

    let cadeiras = Array()
    cadeiras['qtdePernas'] = qtdePernas
    cadeiras['giratoria'] = giratoria
    cadeiras['cor'] = cor

    cadeira.push(cadeiras)

}

addCadeira(4, true, 'Verde-Limão')
console.log(cadeira)
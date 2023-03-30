// Um software de marcenária

/*Paradigma Orientado a objeto:*/

//Uma cadeira

class Cadeira {
    constructor(qtdePernas, giratoria, cor){
        this.qtdePernas = qtdePernas 
        this.giratoria = giratoria
        this.cor = cor
    }
    girarCadeira(){
        if(this.giratoria === true){
            console.log('Cadeira Giratória')
        } else {
            console.log('Cadeira não é Giratória')
        }
    }
} 
/* Podemos adicionar dessa maneira
let cadeira = new Cadeira(4, false, 'Azul')
let cadeira2 = new Cadeira(1, true, 'Vermelha')

console.log(cadeira, cadeira2) //Saída a quantidade de cadeiras
cadeira.girarCadeira() // Cadeira não é Giratória
cadeira2.girarCadeira() //Cadeira Giratória
*/

let cadeiras = Array()
cadeiras.push(new Cadeira(4, false, 'Azul'))
cadeiras.push(new Cadeira(2, true, 'vermelha'))

console.log(cadeiras)
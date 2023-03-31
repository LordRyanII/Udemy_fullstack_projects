// Introdução ao Paradigma de Orientação a Objeto (Oo)

class carro {
    constructor(){
        this.marca = 'Chevrolet'
        this.modelo = 'Chevette'
        
    }
}

let veiculo = new carro()

console.log(veiculo) // retorna =>  { marca: 'Chevrolet', modelo: 'Chevette' }
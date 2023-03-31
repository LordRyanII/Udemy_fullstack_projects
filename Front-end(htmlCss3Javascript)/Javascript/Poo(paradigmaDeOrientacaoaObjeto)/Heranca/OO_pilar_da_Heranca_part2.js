// // Uso do operador super()

class Animal{
    constructor(cor, tamanho, peso){
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }
    dormir(){
        console.log('Dormir')
    }
}
class Passaro extends Animal{
    constructor(bico, cor, tamanho, peso){
        super(cor, tamanho, peso)

        this.bico = bico
    }
    voar(){
        console.log('Voar')
    }
}

class Papagaio extends Passaro{
    constructor(cor, tamanho, peso){
        super('médio', cor, tamanho, peso)
        this.sabeFalar = true
    }
    falar(){
        console.log('Fala')
    }
}

let papagaio = new Papagaio('verde', 5, 350)
let passaro = new Passaro('pequeno', 'verde', 10, 250)

console.log(papagaio)
console.log(passaro)

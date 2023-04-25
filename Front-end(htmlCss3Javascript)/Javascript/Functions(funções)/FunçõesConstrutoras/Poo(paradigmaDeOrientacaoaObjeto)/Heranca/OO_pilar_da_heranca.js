// Exemplo de Herança

class Animal{
    constructor(){
        this.cor = ''
        this.tamanho = ''
    }
    dormir(){
        console.log('Dormir')
    }
}
class Cachorro extends Animal{
    constructor(){
        super()
        this.orelhas = 'Grandes e caídas'
    } 
    correr(){
        console.log('Correr')
    }
    rosnar(){
        console.log('Rosnar')
    }
}

class Passaro extends Animal{
    constructor(){
        super()
        this.bico = 'Curto'
    }
    voar(){
        console.log('Voar')
    }
}

class Papagaio extends Passaro{
    constructor(){
        super()
        this.sabeFalar = true
    }
    falar(){
        console.log('Fala')
    }
}

let cachorro = new Cachorro()
let passaro = new Passaro()
let papagaio = new Papagaio()

cachorro.dormir()
papagaio.voar()

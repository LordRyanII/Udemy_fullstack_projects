// Exemplo de outros mode de orientação a Objetos

function adicao(n1 = 10, n2 = 20){
    return n1 + n2
}

console.log(` Resultado de uma function: ${adicao()}`)

class numbers {
    constructor(){
        this.n1 = 10
        this.n2 = 20
    }
    soma(){
        return this.n1 + this.n2
    }
}

let Resultado = new numbers()
console.log(`Resultado de uma classe orientada a objeto: ${Resultado.soma()}`)


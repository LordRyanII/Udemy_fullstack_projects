/* 
    Crie um módulo chamado "geradorAleatorio" que exporte uma função chamada "gerarNumero". Essa função deve retornar um número inteiro aleatório entre um valor mínimo e um valor máximo, passados como parâmetros. Em seguida, importe esse módulo em um arquivo principal e utilize a função exportada para gerar um número aleatório dentro de um intervalo específico.

*/

module.exports = class numeroAleatorio {
    constructor(min, max) {
        this.min = min
        this.max = max
    }
    Aleatorio() {
        return console.log(Math.floor((Math.random() * (this.max - this.min + this.min))))
    }
}

function Carro(velocidadeMedia = 200, delta = 5){
    //Atributo Privado

    let velocidadeAtual = 0

    //metodo público:

    this.acelerar = () =>{ //this torna a função pública
        if(velocidadeAtual + delta <= velocidadeMedia){
            velocidadeAtual += delta //concatenação
        } else {
            velocidadeAtual = velocidadeMedia
        }
    }

    //metodo público:

    this.getVelocidadeAtual = () =>{
        return velocidadeAtual
    }
}

const Uno = new Carro()
Uno.acelerar()
console.log(Uno.getVelocidadeAtual())

const Ferrari = new Carro(350, 20)
Ferrari.acelerar()
Ferrari.acelerar()
console.log(Ferrari.getVelocidadeAtual()) 
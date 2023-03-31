/*
    Class => é o modelo da entidade/Objeto
    
    O código funciona assim, "nos temos uma classe, que quando instânciada é construída um objeto"

    methodo(){} => É uma função porém, aqui é chamado de metódo, por exemplo metódo para sacar,depositar... Só é possível usar na versão 5 do ecmaScript
*/

class ContaBancaria {
    constructor(){
        this.agencia = 1075
        this.numeroConta = 8351125
        this.saldo =  50
        this.limite = 450
    }
    depositar(valorDeposito){
        this.saldo += Number(valorDeposito)  //Vai acrescentar e somar o valor que será passado
    }
    sacar(valorSaque){
        this.saldo -= valorSaque
    }
    consultarSaldo(){
        return `R$${this.saldo}`
    }
}

let conta = new ContaBancaria()
console.log(conta.consultarSaldo()) //Consulta os saldos e retorna o valor inicial: R$50

/* Metódos de uso dos valores: */

conta.depositar(450)  //Passa um valor
console.log(conta.consultarSaldo()) //Consulta o saldo após acrescentar um valor: R$500

conta.sacar(59) //Retira um valor
console.log(conta.consultarSaldo()) //Consulta o saldo após sacar o valor : R$441

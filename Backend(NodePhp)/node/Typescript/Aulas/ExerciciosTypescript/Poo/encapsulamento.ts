//Encapsulamento: Crie uma classe ContaBancaria com propriedades privadas como saldo e métodos públicos para depositar e sacar.

class ContaBancaria {
  contaValor: number[] = [];
  constructor(public readonly conta: number, public readonly agencia: number) {}

  depositar(saldo: number): void {
    const saldoInicial = 0;
    const resultado = saldoInicial + saldo;
    this.contaValor.push(resultado);

    return console.log(
      `Saldo adicionado com sucesso, Agencia: ${this.agencia}, Conta: ${this.conta}, valor inicial ${saldoInicial}, Saldo atual: ${resultado}`
    );
  }

  sacar(valor: number): void {
    const resultadoSaque = this.contaValor[0] - valor;
    return console.log("Saque bem sucedido, valor em conta:" + resultadoSaque);
  }
}

const depositante = new ContaBancaria(5550, 20002);
depositante.depositar(1000);
depositante.sacar(150);

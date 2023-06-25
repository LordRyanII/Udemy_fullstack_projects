class contaBancaria {
    constructor(cc, saldo) {
        this.conta = cc;
        this.total = saldo;
        console.log(`Conta: ${this.conta}, Saldo: R$${this.total}`);
    }

    AdicionaSaldo(valor) {
        this.total += valor; // Atualiza o saldo adicionando o valor fornecido
        console.log(`SUCESSO! Você acrescentou o valor de: R$${valor}, total: R$${this.total}`);
        return this.total; //Atualiza o metódo this.total
    }
    Saque(valor) {
        this.total -= valor; //Atualia o saldo removendo o valor
        console.log(`SUCESSO! Você fez um saque no valor de: R$${valor}, total: R$${this.total}`)
        return this.total
    }
    Extrato() {
        console.log(`Conta: ${this.conta}, Saldo: R$${this.total}`);
    }
}

const conta = new contaBancaria(1001, 1500);
conta.AdicionaSaldo(800);
conta.Extrato();
conta.Saque(50);
conta.Extrato();


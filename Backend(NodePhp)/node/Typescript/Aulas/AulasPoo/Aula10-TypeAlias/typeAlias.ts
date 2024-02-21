type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
};

export class Pessoas implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}
  public nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

const pessoa1 = new Pessoas("Ryan", "Menezes");
console.log(pessoa1.nomeCompleto());

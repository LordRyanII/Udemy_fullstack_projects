interface tipoNome {
  nome: string;
}
interface tiposobrenome {
  sobrenome: string;
}

interface tipoNomeCompleto {
  nomeCompleto(): string;
}

type TipoPessoa = tipoNome & tiposobrenome & tipoNomeCompleto;
interface TipoPessoa2 extends tipoNome, tiposobrenome, tipoNomeCompleto {}

export class Pessoas implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}
  public nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

const pessoa1 = new Pessoas("Ryan", "Menezes");
console.log(pessoa1.nomeCompleto());

class Pessoa1 {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
  ) {}
  public getIdade(): number {
    return this.idade;
  }
  public getCpf(): string {
    return this.cpf;
  }
  public getNomeCompleto(): string {
    return this.nome + this.sobrenome;
  }
}

export class Aluno extends Pessoa1 {
  public getTabelaAlunos(): void {
    const objetoTabela = {
      Nome: this.nome,
      Sobrenome: this.sobrenome,
      Cpf: this.cpf,
    };

    return console.table(objetoTabela);
  }
}

export class Cliente extends Pessoa1 {}

const aluno = new Aluno("Linus", "Torvalds", 30, "123.144.150-09");

aluno.getTabelaAlunos();

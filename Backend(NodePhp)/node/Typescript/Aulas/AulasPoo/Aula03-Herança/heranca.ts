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
};

export class Aluno extends Pessoa1 {};

export class Cliente extends Pessoa1 {};

const pessoa = new Aluno('Linus', 'Torvalds', 30, '123.144.150-09');
const aluno = new Aluno('Linus', 'Torvalds', 30, '123.144.150-09');
const cliente =  new Cliente('Marcos', 'Souza', 28, '678.901-23');

console.log(aluno);
console.log(cliente);
console.log(pessoa.getIdade());

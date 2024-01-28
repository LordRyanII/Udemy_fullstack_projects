class Pessoa1 {
  Nome: string;
  Idade: number;

  constructor(nome: string, idade: number) {
    this.Nome = nome;
    this.Idade = idade;
  }

  public NomeCompleto(): void | string {
    return `${this.Nome} tem ${this.Idade} anos.`;
  }
}

class Habilidades extends Pessoa1 {
  Profissao: string;
  Habilidade: string;

  constructor(
    nome: string,
    idade: number,
    profissao: string,
    habilidades: string
  ) {
    super(nome, idade);
    this.Profissao = profissao;
    this.Habilidade = habilidades;
  }
  public MostrarHabilidades():string {
    return `O ${this.Nome}, tem ${this.Idade}anos e, é um ${this.Profissao}, possui a habilidade de ${this.Habilidade}.`;
  }
}

const pessoa = new Pessoa1("Ryan", 22);
console.log(pessoa.NomeCompleto());
const habilidade = new Habilidades("Ryan", 22, "Desenvolvedor", "Node.js");
console.log(habilidade.MostrarHabilidades());

export default Pessoa1;

export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
  public adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
  public mostrarColoboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(`Nome: ${colaborador.nome}`);
    }
  }
};

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
};

const empresa1 = new Empresa("Udemy", "221.1770.00001");
console.log(empresa1);
const colaborador1 = new Colaborador("Ryan", "Menezes");
const colaborador2 = new Colaborador("Roberto", "Miranda");
const colaborador3 = new Colaborador("Ana", "Júlia");
const colaborador4 = new Colaborador("Renata", "Alves");
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
empresa1.adicionaColaborador(colaborador4);

console.log(empresa1);
empresa1.mostrarColoboradores();

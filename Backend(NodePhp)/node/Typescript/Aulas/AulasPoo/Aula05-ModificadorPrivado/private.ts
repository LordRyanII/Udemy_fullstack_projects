export class Empresa {
  public readonly nome: string;
  protected colaboradores: Colaborador[] = []; // Somente nas classes  derivadas podemos acessar este atributo
  private readonly cnpj: string; //Private somente na classe que foi criada

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
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

class Udemy extends Empresa {
  constructor() {
    super("Udemy", "123.144.150");
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

const empresa1 = new Udemy();

// Crie uma classe Veiculo que tenha propriedades comuns a todos os veículos, como numeroRodas e cor. Em seguida, faça a classe Carro herdar de Veiculo.

export class Veiculos {
  public readonly numeroRodas: number;
  public readonly cor: string;
  public readonly _anodeFabrica: number;

  constructor(numeroRodas: number, cor: string, anoFabricacao: number) {
    this._anodeFabrica = anoFabricacao;
    this.cor = cor;
    this.numeroRodas = numeroRodas;
  }
}

class Carro extends Veiculos {
  constructor(
    public numeroRodas: number,
    public cor: string,
    public anoFabricacao: number,
    public marcaCarro: string,
    public tipo: string
  ) {
    super(numeroRodas, cor, anoFabricacao);
  }

  getTabelaEspecificacao(): void {
    const objetoHerdado = {
      Ano: this._anodeFabrica,
      Cor: this.cor,
      Rodas: this.numeroRodas,
      Marca: this.marcaCarro,
      Tipo: this.tipo,
    };
    console.table(objetoHerdado);
  }
}

const Carro1 = new Carro(4, "Vermelho", 2005, "Toyota", "Sedan");
Carro1.getTabelaEspecificacao();

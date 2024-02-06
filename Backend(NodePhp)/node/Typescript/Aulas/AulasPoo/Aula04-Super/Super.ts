class Carro {
  constructor(public cor: string, public ano: number) {}
  public getCarro(): string {
    return `Cor do carro é ${this.cor} e o Ano de Fabricação é ${this.ano}`;
  }
  public validaCarroNovo(): string {
    if (this.ano >= 2014) {
      return "Carro novo";
    } else {
      return "Carro velho";
    }
    //return this.ano >= 2014 ? "Carro novo" : "Carro velho";
  }
}

const carro = new Carro("Verde", 2020);

console.log(carro.validaCarroNovo());

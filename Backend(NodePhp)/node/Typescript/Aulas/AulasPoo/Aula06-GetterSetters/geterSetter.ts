class Automovel {
  constructor(
    private marca: string,
    private tipoCarro: string,
    private Placa: string
  ) {}
  getAutomovel(): void {
    const placaFormatada = this.Placa.replace(/\D/g, "");

    return console.log(
      `o automóvel da marca ${this.marca} é do tipo ${this.tipoCarro}, número de placa ${placaFormatada}.`
    );
  }
}

const carro1 = new Automovel("Hiunday", "Sedan", "Ikt-40096");
carro1.getAutomovel();

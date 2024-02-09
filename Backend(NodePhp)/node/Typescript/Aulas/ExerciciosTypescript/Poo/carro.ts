//Criando uma Classe: Crie uma classe Carro com propriedades como marca, modelo, ano e métodos como ligar e desligar.

export class Carro {
  constructor(
    private marca: string,
    private modelo: string,
    private ano: number
  ) {}
  ligar(): void {
    console.log(`Iniciando: ${this.marca}, ${this.modelo}, ano: ${this.ano}`);
    console.log("Vrum vrum!");
  }
  desligar(): void {
    console.log("Apagando motores");
    console.log("Desligando carro");
    console.log(`Carro: ${this.marca} ${this.modelo} está desligado`);
  }
}

const novoCarro = new Carro("Fiat", "Palio", 2018);
novoCarro.ligar();
novoCarro.desligar();

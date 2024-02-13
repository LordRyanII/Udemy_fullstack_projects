//Encontre o maior número em uma lista: Escreva um algoritmo para encontrar o maior número em uma lista de valores.

class VerificaNumero {
  public numero: number[];
  constructor(...numeros: number[]) {
    this.numero = numeros;
  }

  public numeroMaior(): void {
    let listaNumeros = this.numero;
    listaNumeros.reduce((a, b) => {
      return a > b ? a : b;
    });
    return console.log("O maior número é " + Math.max(...listaNumeros));
  }
};

const listaNumeros = new VerificaNumero(200,10,50,100,158,198);
listaNumeros.numeroMaior();

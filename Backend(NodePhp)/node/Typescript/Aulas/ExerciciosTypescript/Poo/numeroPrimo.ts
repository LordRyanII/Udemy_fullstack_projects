//Verifique se um número é primo: Crie um programa que determine se um número é primo ou não.

class isPrimo {
  public static verificaNumero(numero: number): void {
    let divisao = 2;
    while (divisao <= numero / 2) {
      if (numero % divisao == 0) {
        console.log(`${numero} é composto por ${divisao}.`);
        return;
      } else {
        divisao++;
      }
    }
    console.log(`${numero} é um número primo!`);
  }
}

const numero = isPrimo.verificaNumero(6);

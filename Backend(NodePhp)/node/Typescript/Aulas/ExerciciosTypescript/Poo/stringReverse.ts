//Inverta uma string: Desenvolva um algoritmo que inverta uma string fornecida como entrada.
export class stringReverse {
  public static reverta(...palavras: string[]): string {
    const arrayPalavras = palavras;

    const palavraReverse = arrayPalavras.map((obj) => {
      const objetoReverse = obj.split("").reverse().join("").toLocaleLowerCase();

      return objetoReverse;
    });

    return palavraReverse.toString();
  }
}

console.log(stringReverse.reverta("Ryan", "Renata"));


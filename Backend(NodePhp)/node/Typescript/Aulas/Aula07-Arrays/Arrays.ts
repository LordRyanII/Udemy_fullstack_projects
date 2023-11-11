//Tipo Array: <T> generyc  | T[]

function multiplicaArgumentos(...args: Array<number>): number {
  return args.reduce((multiplicacao, valor) => multiplicacao * valor, 1);
}

function concatenaStrings(...args: Array<string>): String {
  return args.reduce((valor1, valor2) => valor1 + valor2);
}

const result: number = multiplicaArgumentos(10, 50, 40, 100);
const palavras = concatenaStrings('Ryan', ' Renata');

console.log(result);
console.log(palavras)

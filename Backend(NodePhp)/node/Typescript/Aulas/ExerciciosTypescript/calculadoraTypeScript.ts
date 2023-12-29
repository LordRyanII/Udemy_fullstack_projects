//Implemente um objeto que represente uma calculadora com funções para adição, subtração, multiplicação e divisão.

interface objeto {
  numero1: number;
  numero2: number;
  simbolo: string;
}

const Calculadora = (objetos: objeto): string => {
  const { numero1, numero2, simbolo } = objetos;

  if (simbolo === "+") {
    const resultado = numero1 + numero2;
    return `Soma igual a ${resultado}`;
  } else if (simbolo === "-") {
    const resultado = numero1 - numero2;
    return `Subtração igual a ${resultado}`;
  } else if (simbolo === "*") {
    const resultado = numero1 * numero2;
    return `Multiplicação igual a ${resultado}`;
  } else {
    return "Insira um valor";
  }
};

const objetoSoma: objeto = {
  numero1: 5,
  numero2: 10,
  simbolo: "+",
};

const objetoSubtracao: objeto = {
  numero1: 25,
  numero2: 10,
  simbolo: "-",
};

console.log(Calculadora(objetoSoma));
console.log(Calculadora(objetoSubtracao));

export default Calculadora;

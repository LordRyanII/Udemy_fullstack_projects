// Escreva uma função que recebe um número e retorne o seguinte:
// número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorne o próprio número
// Checar se o número é realmente um número 
// Só é permitidos números de 1 a 100

function ImprimeBuzzFizz(n1) {
    if (isNaN(n1) || n1 > 101) {
      return `${n1} não é um número válido para essa operação`;

    } else if (n1 % 3 === 0 && n1 % 5 === 0) {
      return 'BuzzFizz';

    } else if (n1 % 3 === 0) {
      return 'Fizz';

    } else if (n1 % 5 === 0) {
      return 'Buzz';

    } else {
      return n1.toString();

    }
  }
  
console.log(ImprimeBuzzFizz(7))
  
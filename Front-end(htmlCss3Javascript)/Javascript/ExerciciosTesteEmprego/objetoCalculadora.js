//Implemente um objeto que represente uma calculadora com funções para adição, subtração, multiplicação e divisão.

const calculadora = (obj) => {
    const { numero1, numero2, operador } = obj;
    const numeroUm = Number(numero1);
    const numeroDois = Number(numero2);

    if (operador === '+') {
        return numeroUm + numeroDois;
    } else if (operador === '-') {
        return numeroUm - numeroDois;
    } else if (operador === '/') {
        return numeroUm / numeroDois;
    } else if (operador === '*') {
        return numeroUm * numeroDois;
    }
}

const dadosSoma = {
    numero1: 5,
    numero2: 8,
    operador: '+'
};

const dadosSubtracao = {
    numero1: 30,
    numero2: 10, 
    operador: '-'
};

const dadosDivisao = {
    numero1: 60, 
    numero2: 3, 
    operador: '/'
};

const dadosMultiplicacao = {
    numero1: 5,
    numero2: 6,
    operador: '*'
}

console.log(calculadora(dadosSoma));
console.log(calculadora(dadosSubtracao));
console.log(calculadora(dadosDivisao));
console.log(calculadora(dadosMultiplicacao));

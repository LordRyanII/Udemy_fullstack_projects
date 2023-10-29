function subtracao(x:number, y:number){ //Função 
    return x - y;
}

const soma = (x:number, y:number) => { //Função com arrow function
    return x + y;
};

const multiplicacao = function (x:number, y:number){ //Função anônima
    return x * y;
};

const resultadoSubtracao = subtracao(100,50);
const resultadoSoma = soma(20,50);
const resultadomultiplicacao = multiplicacao(20,50);

console.log(resultadoSubtracao);
console.log(resultadoSoma);
console.log(resultadomultiplicacao);


const pessoas: (nome:string, sobrenome:string) => string = (nome,sobrenome) => nome + sobrenome;
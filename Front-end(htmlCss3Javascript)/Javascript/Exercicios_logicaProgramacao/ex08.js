// Exercício de tabuada:
// Escreva um programa que solicite ao usuário um número e exiba a tabuada desse número de 1 a 10.

function tabuada(n1){
    for(let i = 0; i < 11; i++){
        console.log(`A tabuada de ${n1} é igual a: ${n1}x${i} = ${n1*i}`);
    }
}

tabuada(0);
tabuada(1);
tabuada(2);
tabuada(3);
tabuada(4);
tabuada(5);
tabuada(6);
tabuada(7);
tabuada(8);
tabuada(9);
tabuada(10);

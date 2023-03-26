/*
Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

*/

function Imprime(num){
    for(let i = 0; i < num; i++ ){
        if(num % 3 >= 1){
            console.log(`Número ímpar entre 0 e ${num}: `  + i)
        }
    }
}

Imprime(100);


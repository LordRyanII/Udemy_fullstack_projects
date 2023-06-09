// Escreva um programa que exiba uma contagem regressiva a partir de um número fornecido pelo usuário até zero. Por exemplo, se o usuário fornecer o número 5, o programa deve exibir: 5, 4, 3, 2, 1, 0.

function contagemRegressiva(n1){
    for(let i = n1; i >= 0; i--){
        console.log(i)
    }
}

contagemRegressiva(10)

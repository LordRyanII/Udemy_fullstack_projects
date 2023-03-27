/*
    Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.

*/

function ImprimaVetores(){
    let vetorInteiro = [0, 1, 2, 3, 4];
    let vetorString = ['Zé de camargo', 'Luciano' , 'Ari Toledo' , 'Marta Rocha'];
    let vetorDouble = [10, 20, 30, 40];

    console.log(`${vetorInteiro}, ${vetorString}, ${vetorDouble}`)
}

ImprimaVetores()
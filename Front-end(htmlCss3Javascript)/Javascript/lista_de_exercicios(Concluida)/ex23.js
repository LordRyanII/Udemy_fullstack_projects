/*
Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. 

*/

function notas (n1, n2, n3){

     let media = n1 + n2 + n3

    if(media >= 5){
        return `Aluno Aprovado com nota ${media}`
    } else{
        return `Aluno Reprovado com nota ${media}`
    }
}

console.log(notas(1, 2, 3));
console.log(notas(1, 1, 2));
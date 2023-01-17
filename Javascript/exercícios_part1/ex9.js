/*Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
*/
/*1º criar uma function de notas 0 a 100;
2º criar validaões de notas < 40 é reprovado;
3º se as notas forem iguais a ex: 59, 54... arredondar sempre para 5 ou decimal
4º
*/

function total(notas){
     if(notas < 40){
        return console.log(`Reprovado, suas notas foram ${notas}`)
    } else if(notas > 40 && notas < 50){
        return console.log(`Aprovado! você passou com nota média, sua nota foi: ${Math.round(notas)}`)
    } else if(notas > 50 && notas < 100){
        return console.log(`Aprovado! notas superiores que a metade, sua nota foi: ${Math.round(notas)}`)
    } else{
        return console.log(`[Error] ${notas} entrada não permitida`)
    }
}

console.log(total.call(total, 34.9));
console.log(total.call(total, 44.9));
console.log(total.call(total, 84.9));
console.log(total.call(total, 101))
/*
    Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

*/

function taxaCrescimento(idade, alturaUser){
    let alturaMedia = 25
//verifica a idade
    if( idade < 3 && alturaUser >= 75){
        return `A criança possui uma altura Considera para a idade. Sendo a idade de ${idade} ano e altura de ${alturaMedia} cm por ano`

//caso a idade não seja compatível com altura:
    } else if(idade < 4 && alturaUser < 75){
        return `A criança não possui uma altura Considera para a idade. Sendo a idade de ${idade} anos e altura de ${alturaUser} cm`
//Caso a idade seja mais de 4 anos
    } else if (idade > 4 || idade < 10 && alturaUser > 150){
        return `A criança possui uma altura Considera para a idade. Sendo a idade de ${idade} anos e altura de ${alturaUser} cm`
    }
}

console.log(taxaCrescimento(2, 76));
console.log(taxaCrescimento(2, 70));
console.log(taxaCrescimento(7, 120));
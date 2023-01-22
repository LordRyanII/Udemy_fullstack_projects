/*
    Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
        A 10%
        B 15%
        C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário.
*/

function trabalho(valor){

    if(valor < 1500){
        return `Seu aumento foi de R$${ valor * 10/100}, Seu salário foi para R$${valor + valor * 10/100}. Você faz parte do Plano "A"`
    }else if(valor < 2000){
        return `Seu aumento foi de R$${ valor * 15/100},Seu salário foi para R$${valor + valor * 15/100}. Você faz parte do Plano "B"`
    }else if(valor === 2000){
        return `Seu aumento foi de R$${ valor * 20/100}, Seu salário foi para R$${valor + valor * 20/100} Você faz parte do Plano "C"`
    } else {
        return `Você não teve direito ao aumento, pois seu salario é de R$${valor}`
    }
}



console.log(trabalho(1000));
console.log(trabalho(1500));
console.log(trabalho(2000));
console.log(trabalho(5000))
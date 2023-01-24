/*
Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
tebela:  Conveniados                        valores: 
1) crianças com menos de 10 anos:           pagam R$80; 
2) idade entre 10 e 30 anos                 pagam R$50; 
3) idade acima de 30 e até 60 anos          pagam R$ 95; e 
4) conveniados acima de 60 anos             pagam R$130
*/

function VerificaPlano(numbr){
    if(numbr <= 10){
        return `Você faz parte do plano para crianças seu valor é de R$180`
    }else if(numbr > 10 && numbr <=30){
        return `Você faz parte do plano para juvenil e adultos seu valor é de R$150`
    }else if(numbr > 30 && numbr <= 60 ){
        return `Você faz parte do plano para a melhor idade seu valor é de R$195`
    }else{
        return `Você faz parte do plano para pessoas em hora extra seu valor é de R$200`
    }
}

console.log(VerificaPlano(10));
console.log(VerificaPlano(25));
console.log(VerificaPlano(32));
console.log(VerificaPlano(59));
console.log(VerificaPlano(100));
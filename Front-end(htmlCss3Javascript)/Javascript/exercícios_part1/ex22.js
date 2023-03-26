/*
    Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

function Anuidade (mes, valor){
    let montante = 0
    if(mes === 1){

        return `Em Janeiro teria no valor um acrescimo de 5% ficaria R$${montante = valor * (1+ 5/100)**1}`

    } else if(mes === 2){

        return `Em Fevereiro teria no valor um acrescimo de 10% ficaria R$${montante = parseFloat(valor * (1+ 10/100)**2).toFixed(2).replace('.', ',')}`

    } else if(mes === 3){

        return `Em Março teria no valor um acrescimo de 15% ficaria R$${montante = parseFloat(valor * (1+ 15/100)**3).toFixed(2)}`

    } else if(mes === 4){

        return `Em Abril teria no valor um acrescimo de 20% ficaria R$${montante = parseFloat(valor * (1+ 20/100)**4).toFixed(2).replace('.', ',')}`

    } else if(mes === 5 ){

        return `Em Maio teria no valor um acrescimo de 25% ficaria R$${montante = parseFloat(valor * (1+ 25/100)**5).toFixed(2).replace('.', ',')}`

    } else if( mes === 6){

        return `Em Junho teria no valor um acrescimo de 30% ficaria R$${montante = parseFloat(valor * (1+ 30/100)**6).toFixed(2).replace('.', ',')}`

    } else if( mes === 7){

        return `Em Julho teria no valor um acrescimo de 35% ficaria R$${montante = parseFloat(valor * (1+ 35/100)**7).toFixed(2).replace('.', ',')}`

    } else if (mes === 8){

        return `Em Agosto teria no valor um acrescimo de 40% ficaria R$${montante = parseFloat(valor * (1+ 40/100)**8).toFixed(2).replace('.', ',')}`

    } else if( mes === 9){

        return `Em Setembro teria no valor um acrescimo de 45% ficaria R$${montante = parseFloat(valor * (1+ 45/100)**9).toFixed(2).replace('.', ',')}`

    } else if( mes === 10){

        return `Em Outubro teria no valor um acrescimo de 50% ficaria R$${montante = parseFloat(valor * (1+ 50/100)**10).toFixed(2).replace('.', ',')}`

    } else if( mes === 11){

        return `Em Novembro teria no valor um acrescimo de 55% ficaria R$${montante = parseFloat(valor * (1+ 55/100)**11).toFixed(2).replace('.', ',')}`

    } else {

        return `Em Dezembro teria no valor um acrescimo de 60% ficaria R$${montante = parseFloat(valor * (1+ 60/100)**12).toFixed(2).replace('.', ',')}`

    }
}

console.log(Anuidade(1, 200));
console.log(Anuidade(2, 200));
console.log(Anuidade(3, 200));
console.log(Anuidade(4, 200));
console.log(Anuidade(5, 200));
console.log(Anuidade(6, 200));
console.log(Anuidade(7, 200));
console.log(Anuidade(8, 200));
console.log(Anuidade(9, 200));
console.log(Anuidade(10, 200));
console.log(Anuidade(11, 200));
console.log(Anuidade(12, 200));

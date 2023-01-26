/*
Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.
*/

function vetor(num){
    let vetor = [num]

    if(vetor >= 0.0 && vetor <= 4.9){
        return `Você faz parte do conceito D`
    } else if( vetor >= 5.0 && vetor <=6.9){
        return `Você faz parte do conceito C`
    }
    else if(vetor >= 7.0 && vetor <= 8.9){
        return `Você faz parte do conceito B`
    } else{
        return `Você faz parte do conceito A`
    }
}

console.log(vetor(7.0))
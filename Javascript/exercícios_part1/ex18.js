/* Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’
*/

function Numero_por_extenso(number){
    switch(number){
        case 1:
            return `Você digitou o número um ${number}`;
            break;
        case 2: 
            return `Você digitou o número dois ${number}`;
            break;
        case 3: 
            return `Você digitou o número três ${number}`;
            break;
        case 4: 
            return `Você digitou o número quatro ${number}`;
            break;
        case 5:
            return `Você digitou o número cinco ${number}`;
            break;
        case 6:
            return `Você digitou o número seis ${number}`;
            break;
        case 7:
            return `Você digitou o número sete ${number}`
            break;
        case 8:
            return `Você digitou o número oito ${number}`;
            break;
        case 9:
            return `Você digitou o número nove ${number}`;
            break;
        case 10:
            return `Você digitou o número dez ${number}`
            break
        default:
            return `Infelizmente a nossa contagem é de 1 a 10`
    }
}

console.log(Numero_por_extenso(1));
console.log(Numero_por_extenso(2));
console.log(Numero_por_extenso(3));
console.log(Numero_por_extenso(4));
console.log(Numero_por_extenso(5));
console.log(Numero_por_extenso(6));
console.log(Numero_por_extenso(7));
console.log(Numero_por_extenso(8));
console.log(Numero_por_extenso(9));
console.log(Numero_por_extenso(10));
console.log(Numero_por_extenso(11))
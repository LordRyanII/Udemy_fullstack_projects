/*Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

function verifica(number){
    if(number % 3 === 0){
        return console.log('True')//retorna que sim, o número pode ser dividido por 3
    } else if(number % 3 === 1){
        return console.log('false')//retorna que não, o número não pode ser dividido por 3
    }
}

console.log(verifica(40));
console.log(verifica(3))
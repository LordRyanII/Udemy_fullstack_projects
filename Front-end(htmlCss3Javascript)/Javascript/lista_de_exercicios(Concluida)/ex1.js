/*Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração
multiplicação e divisão desses valores*/


const Numeros = (n1, n2) =>{
    return ` A Soma é: ${n1 + n2}, A subtração é: ${n1 - n2}, A multiplicação é: ${n1 *n2} e por fim a divisão é:   ${n1 / n2} `

}


console.log(Numeros.call( Numeros, 30, 40))


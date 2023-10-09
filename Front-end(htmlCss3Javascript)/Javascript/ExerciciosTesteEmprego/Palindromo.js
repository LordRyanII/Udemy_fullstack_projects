//Escreva uma função que determine se uma palavra é um palíndromo.


const palindromo = (palavraDigitada) => {
    const palavra = palavraDigitada.toUpperCase()
    const palavraInvertida = palavra.split('').reverse().join()
    const palavraFormatada = palavraInvertida.replace(/,/g, '')

    return palavraFormatada === palavra? `A palavra ${palavra} é um palíndromo`: 'Não é um palíndromo'

    //return palavra
}


console.log(palindromo('Ana'));
console.log(palindromo('NaN'));
console.log(palindromo('Ryan'));
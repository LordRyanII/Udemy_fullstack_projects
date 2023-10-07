//Escreva uma função que inverta uma string.


const palavraContraria = (...palavra) => {
    const palavras = palavra.join(' '); // Converter os argumentos em uma única string com espaço
    const palavrasInvertidas = palavras.split(' ').map(word => word.split('').reverse().join('')).join(' ');
    return palavrasInvertidas;
}

console.log(palavraContraria('Ryan', 'matheus', 'papito'));

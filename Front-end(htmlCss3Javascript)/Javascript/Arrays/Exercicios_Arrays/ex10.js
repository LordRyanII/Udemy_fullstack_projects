// Crie uma função que receba um array de números e retorne o número mais alto.

function MaiorNumero(...numeros) {
    return Math.max(...numeros);

};
  
console.log(MaiorNumero(10, 50, 60, 101)); // Saída: 101


/*
    Anotações Dicas:

*/

// Math.max()  = = >  Encontra o maior número em um array e passar o array de números diretamente como parâmetro para a função;

//Observe que o spread operator (...) é usado novamente, desta vez para "espalhar" os números do array diretamente como argumentos para a função Math.max(). Dessa forma, a função retorna o maior número presente no array de entrada.

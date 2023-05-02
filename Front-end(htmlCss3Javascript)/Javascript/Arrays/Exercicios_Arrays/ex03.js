// Dado um array de strings, retorne um novo array com as strings que possuem mais de 5 caracteres.
// Exemplo de entrada: ["banana", "abacaxi", "maçã", "laranja", "uva"]
// Exemplo de saída: ["banana", "abacaxi", "laranja"]

const frutas = ["banana", "abacaxi", "maçã", "laranja", "uva"];

const frutasEspecificas = frutas.filter(obj => {
    return obj.length > 5;
});

console.log(frutasEspecificas);
/*
    Dado um array de strings, retorne um novo array com as strings convertidas para maiúsculas.
    Exemplo de entrada: ["banana", "abacaxi", "maçã"]
    Exemplo de saída: ["BANANA", "ABACAXI", "MAÇÃ"]
*/

const Frutas = ["banana", "abacaxi", "maçã"];

const FRUTAS = Frutas.map(obj => {
    return obj.toUpperCase();
});

console.log(FRUTAS)
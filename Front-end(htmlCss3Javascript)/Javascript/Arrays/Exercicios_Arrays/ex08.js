/*
    Dado um array de objetos representando livros com as propriedades "título" e "autor", retorne um novo array com os títulos dos livros escritos por um autor específico.
    Exemplo de entrada: [{ título: "Dom Casmurro", autor: "Machado de Assis" }, { título: "O Guarani", autor: "José de Alencar" }, { título: "A Moreninha", autor: "Joaquim Manuel de Macedo" }]

    Exemplo de saída (para o autor "Machado de Assis"): ["Dom Casmurro"]
*/

const livros = [
    { título: "Dom Casmurro", autor: "Machado de Assis" },
    { título: "O Guarani", autor: "José de Alencar" },
    { título: "A Moreninha", autor: "Joaquim Manuel de Macedo" }

];

const Autores = livros.map(obj => {
    return ` Para o Autor ${obj.autor} : ${obj.título}`;
});

console.log(Autores)
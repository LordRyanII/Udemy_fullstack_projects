/*
    Exemplos Do uso do filter
*/

//Retorne as pessoas que tem o nome com 5 letras ou mais;
// Retorne as pessoas com mais de 50 anos;
// Retorne as pessoas cujo o nome começa com 'A'

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoaComNomeGrande = pessoas.filter(function(objeto){
    return objeto.nome.length >= 5;
});

const pessoasMaisVelhas = pessoas.filter(objeto => {
    return objeto.idade > 50;
});

const pessoasTerminamComA = pessoas.filter(objeto => {
    return objeto.nome.toLowerCase().endsWith('a');
}); //Explicando: toLowerCase() => converte as strings em minúsculas | endsWith('a') => retorna a letra 'A' no final

console.log(pessoaComNomeGrande) //Retorna os nomes maiores e igual a 5;
console.log(pessoasMaisVelhas) //Retorna os objetos que contém pessoas com mais de 50 anos;
console.log(pessoasTerminamComA) //Retorna os objetos que contém pessoas com mais de 50 anos;

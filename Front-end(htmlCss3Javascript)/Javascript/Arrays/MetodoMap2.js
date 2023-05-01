// Usando o map
/*
    Usando o metodo map em um Objeto:
*/
//Para cada elemento:
// Retorne apenas uma string com o nome das pessoas;
// Remova as chaves do 'nome' das pessoas;
// Adicione uma chave id em cada objeto;

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Renata', idade: 20},
    {nome: 'Eduarda', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const nomes = pessoas.map(valor => {
    return valor.nome

});

const idades = pessoas.map(obj => {

    //delete obj.nome   => Funciona também, porém não seria mais possível acessar os nomes

    return {idade: obj.idade} //Cria um novo objeto só com as idades

});

const ids = pessoas.map((obj, indice) => {
    
    const NovoObjeto = {obj};
    NovoObjeto.id = (indice + 1);
    return NovoObjeto;

});


console.log(nomes);
console.log(idades);
console.log(ids);
console.log(pessoas);
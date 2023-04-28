let nums1 = [1, 2 , 3 , 4];
let nums2 = [4, 5 , 6 , 7];

//Usando função (metódo concat)
let itens = nums1.concat(nums2, 'Renata');

console.log(itens);

// Usando spread operator

let dados1 = [{nome: 'Rafael', sobrenome: 'Oliver'}, {cc: 1702}];
let dados2 = [{nome: 'Rafaela', sobrenome: 'Ballerini'}, {cc: 1892}];

console.log(dados1,);
console.log(dados2);

//junta os dados, criou um array com os dois objetos
let dados = [...dados1, ...dados2]
console.log(dados);
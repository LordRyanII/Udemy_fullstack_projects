/*
    Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
    casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
    escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
    também um default, que retornará uma mensagem de erro no console.
*/
function frutas(nome){
    switch(nome){
        case 'Maça':
        return console.log('Não vendemos essa fruta aqui');
        break;
        case 'Kiwi':
        return console.log('Estamos com escassez de kiwis');
        break;
        case 'Melancia':
        return console.log('Aqui está, são 3 reais o quilo');
        break;
    }
}

console.log(frutas('Maça'));
console.log(frutas('Kiwi'));
console.log(frutas('Melancia '))
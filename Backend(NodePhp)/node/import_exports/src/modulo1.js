const nome = 'Renata';
const sobrenome = 'Alves';
const idade = 30;

function soma(x,y){
    return x+y
};

//se digitar export { nome (variavel) as nome2 }
//nome2 que será usado no import

export { nome, sobrenome, idade, soma};
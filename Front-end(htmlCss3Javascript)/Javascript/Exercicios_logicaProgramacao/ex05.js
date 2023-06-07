// Exercício de par ou ímpar:
// Escreva um programa que solicite ao usuário um número e verifique se ele é par ou ímpar. Exiba uma mensagem indicando o resultado.

function parImpar(n1){
    if(typeof n1 === 'number'){
		if(n1 % 2 == 0){
            return console.log('par')
        }else{
            return console.log('ímpar')
        }
    
    }else{
        return console.log('número inválido')
    }
};

parImpar('qualquer coisa');
parImpar(60);
parImpar(1065428);
parImpar(2050155);


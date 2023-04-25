/*
     Maneiras de Declarar funções
*/
// Declaração de Função:

function FalaOi(){
    console.log('Oi!');
} //Maneira literal de declarar uma função (modo tradicional)

// Funções são first-class object (Objetos de Primeira Classe)


const souUmDado = () => {
    return console.log('Sou um dado.')
}

function ExecutaFuncao(funcao){
    funcao()
}

ExecutaFuncao(souUmDado) //Retorna a frase acima


//Podemos também usar funções em Objetos

const obj = {
    falar: function falaOi(){
        console.log('Oie')
    }
}

obj.falar()
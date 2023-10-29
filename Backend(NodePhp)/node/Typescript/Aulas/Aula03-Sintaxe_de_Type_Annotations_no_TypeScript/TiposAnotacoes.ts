//Tipos básicos (Aqui ocorre inferência de tipo):

let saudacao: string = 'Hello Word'; //Tipo String, dados do tipo palavras, nomes... !== number;
let idade:number = 10 //Dado do tipo número, são os dados que não precisam de '';
let adulto:boolean = true // Dados do tipo verdadeiro ou falso (true and false);


//Arrays

const numerosArray: Array<number> = [0 , 1 , 2 , 3 , 4 , 5];//Array em maiúsculo, assim como o construtor array
const numerosArray2: number[] = [0 , 1 , 2 , 3 , 4 , 5]; //Forma de escrever também, mesma coisa que em cima
const stringArray: Array<string> = ['Renata']; //Mesma coisa de números
const stringArray2: string[] = ['Renata']; //Mesma coisa de números

//Objetos

const pessoa: {nome: string, idade: number, adulto?:boolean} = {
    nome:'Renata',
    idade: 18,
};


//start_of_my_code

let dobro = function(a){
    return 2 * a
}//function sem arrow function

dobro = (a) => {
    return 2* a
} //function com arrow function
//arrow function precisa estar em uma variavél para ser executada
//Não substituí a function padrão

console.log(dobro(20))



/*
Outro exemplo com arrow fuction
*/

let Ola = function(){
    return 'ola!'
}

Ola = () => 'olá!'
Ola = _ => 'olá!'//também é permitido, o "_" é um parametro
console.log(Ola)
// Importando componentes:

const moduloA = require('./moduloA') //Importei os Objetos do ModuloA
const moduloB = require('./moduloB') //Importei os Objetos do ModuloB com a função

//Exibindo:

console.log(moduloA) //retorna todo o moduloA
console.log(moduloA.ola) //retorna a STRING do moduloA
console.log(moduloA.bemvindo)


console.log(moduloB) //Retorna a função do moduloB 
console.log(moduloB.boaNoite()) //Retorna o resultado da Função Boa noite
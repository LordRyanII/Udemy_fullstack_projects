const contadorA = require('./intanciaUnica');
const contadorB = require('./intanciaUnica');

const contadorC = require('./instanciaNova')() //Cria uma função factory para o objeto
const contadorD = require('./instanciaNova')() 

contadorA.inc();
contadorA.inc()

console.log(contadorB.valor)
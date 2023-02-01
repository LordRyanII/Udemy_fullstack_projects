// Aprendendo a importar modúlos de outras pastas

const moduloA = require('../../moduloA.js') // '  ../../  ' Assim serve para acessar o modulo A

// const moduloZ = require('moduloB.js') => error, pois não é um arquivo global

console.log(moduloA)
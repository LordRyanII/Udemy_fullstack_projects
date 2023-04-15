// Date() ===> É uma função Construtora, então precisa ser instanciada


const data = new Date()

console.log(data) // Ele retona a data com a hora em milésimos de segundo
console.log(data.toDateString()) // Retorna o valor como String no formato padrão USA


console.log(typeof data)
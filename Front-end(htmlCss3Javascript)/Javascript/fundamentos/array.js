//Conceito de array

const valores = [7.7 , 8.9 , 6.3 , 9.2]
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])

console.log(typeof valores)
valores.push('banana') //adiciona string banana no final do array
console.log(valores) // mostra no node.js

delete valores[4] //deleta o elemento 4
console.log(valores) //exibe o resultado

valores[4] = 'maça' //pede para o js criar uma fileira (elemento) que não existe com valor 'maça'
console.log(valores) //exibe o resultado
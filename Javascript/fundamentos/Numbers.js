//Manipulando classe de números

const peso1 = 1.0
const peso2 = Number('2.0')
const peso3 = Number('3.5')

{
    console.log(peso1, peso2)
    console.log(Number.isInteger(peso1))
    /*mostra se o valor é um número inteiro ou decimal, retornando:
    true === numero inteiro
    false === numero decimal
    */
   console.log(Number.isInteger(peso3))
   //É necessário usar o Number, para não dar erro
}
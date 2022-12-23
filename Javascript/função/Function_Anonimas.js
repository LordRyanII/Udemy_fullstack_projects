//Start_of_my_code


const soma = function(x,y){
    return x+y
}

console.log(soma(2,1))

let imprime_resultado = (a,b, operacao = soma /* vai atribuir o valor da função soma*/) =>{
    console.log(operacao(a,b)) //x e y vai valer agora como 'a' e 'b'
}

imprime_resultado(3,4) //Imprime o resultado
imprime_resultado(3,4, function(x,y){
    return x-y
}) //cria uma nova função de subtração
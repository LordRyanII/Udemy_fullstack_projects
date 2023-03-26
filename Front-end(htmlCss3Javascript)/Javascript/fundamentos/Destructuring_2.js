function getAleatoryNumber({min = 0 , max = 1000}){ //função de criar o numero
    let valor = Math.random() * (max-min) + min // necessário para gerar o numero
    return Math.floor(valor) //para retornar o valor
}
    
const obj = {max:1000, min:40} //para alterar o valor e poder exibir
console.log(getAleatoryNumber(obj)) //Exibição
    
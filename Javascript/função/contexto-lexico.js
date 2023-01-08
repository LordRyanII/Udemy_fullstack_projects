const valor = 'Global'

function myFunction (){
    console.log(valor)
}

function exec(){
    let valor = "Local"
                //não vai exibir, pois mantém os valores da primeira variavel
    return myFunction()
}

exec()//exibe apenas o valor da VARIAVEL global
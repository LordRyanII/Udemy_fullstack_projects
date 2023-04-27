// Aprendendo sobre funções recursivas;
// São funções que criam os laços de repetição;


function recursiva(max){

    if(max >= 10){
        return  //Aqui age como um continua

    } else{
        max ++ //conta o número até chegar a 10
        console.log(max) //exibe a contagem
    }

    recursiva(max) //chama a função de volta

}

recursiva(1)
/*
    Fazer um programa para encontrar todos os pares entre 1 e 100
*/

function ParImpar(numbr){

    for(let i=0; i < 101; i++){
        if(i%2 === 0){
            console.log(`Número Par: ` + i)
        }else if( i % 2 === 1){
            console.log(`Números Impar: ` + i)
        }
    }
    
}

console.log(ParImpar(2));
console.log(ParImpar(3));
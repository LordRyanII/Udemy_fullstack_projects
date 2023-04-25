function soma(...numeros) {
    let resultado = 0;
    for (let i = 0; i < numeros.length; i++) {
      resultado += numeros[i];
    }
    return  console.log(resultado)
  }
  
soma(10, 20, 30, 40, 50); 

function subtracao(n1 = 50, n2 = 40){

    return console.log(n1 - n2)
}
  
subtracao()
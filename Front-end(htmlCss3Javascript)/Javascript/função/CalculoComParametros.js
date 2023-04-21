// Podemos fazer calculos usando paramêtros da função

function conta(operador, acumulador, ...numeros){

    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }

    return console.log(acumulador)
}

conta('-', 2000, 1500)
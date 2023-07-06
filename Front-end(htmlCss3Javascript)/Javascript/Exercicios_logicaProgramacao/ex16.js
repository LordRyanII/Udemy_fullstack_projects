// Verificação de número primo: Escreva uma função que verifique se um número é primo. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.

const numerosPrimos = (n1) => {
    if (n1 % 1 === 0){
        return 'true'
    } else {
        return false
    }
    
}

console.log(numerosPrimos(40))
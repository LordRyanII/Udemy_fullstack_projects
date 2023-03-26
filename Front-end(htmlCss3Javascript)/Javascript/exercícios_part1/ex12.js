//Faça um algoritmo que calcule o fatorial de um núm

function fatorial(num) {
    let resultado = 1;
    for (let i = num; i > 0; i--) {
        resultado *= i;
    }
    return resultado;
}
console.log(fatorial(5));

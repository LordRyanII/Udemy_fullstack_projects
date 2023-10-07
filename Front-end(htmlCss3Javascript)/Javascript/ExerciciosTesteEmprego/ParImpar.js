//Implemente um programa que determine se um número é par ou ímpar.

const parImpar = (...numer) => {
    const verifique = numer.map(obj => {
        const pares = obj % 2 === 0? 'par' : 'impar'
        return console.log(`O numero ${obj} é: ${pares}`)
    });

    return verifique;
}

parImpar(20, 40, 15)
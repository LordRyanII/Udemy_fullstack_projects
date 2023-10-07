//Crie um programa que calcule a média de uma lista de números.

const media = (...numeros) => {
    const total = numeros.map(obj => {
        const mediaTotal = obj / 2 
        return console.log(`A média do número ${obj} é ${mediaTotal}`)
    })
    
}

media(50, 100, 20, 450)
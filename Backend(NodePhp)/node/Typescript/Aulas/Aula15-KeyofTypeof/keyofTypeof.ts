//Keyof e typeof no ramo dos tipos
//typeof é usado para verificar o tipo de uma variável

/*
Typeof pega o tipo, ex:
    const nome = "Ryan"; => O Tipo é string, não precisa de interface, pois o typescript já entendeu que aquilo é uma string
    const idade = 25; => O Tipo é number, não precisa de interface, pois o typescript já entendeu que aquilo é um número
    Então podemos dizer que o que iremos receber vai ser o tipo dos objetos

Keyof pega as chaves do objeto, ex:
    No caso as propriedades, no caso o nome, então podemos usar como tipo

*/

//Modo sem o keyof e typeof
interface cores {
    Vermelho: string,
    Azul: string,
    Verde: string
};

const objCor: cores = {
    Vermelho: 'red',
    Azul: 'blue',
    Verde: 'green'
}

const coresIngles = (cor: "Vermelho" | "Azul" | "Verde", objCores: cores): string => {
    return objCor[cor];
}

console.log(coresIngles("Vermelho", objCor));


//Modo com o keyof e typeof
type objetos = typeof objetosIngles

const objetosIngles = {
    Carro: 'car',
    Balão: 'baloon',
    Caneta: 'pen'
}

const traduzirObjetosParaIngles = (nomeObjeto: keyof objetos, objIngles: typeof objetosIngles): string => {
    return objIngles[nomeObjeto];
}

//console.log(traduzirObjetosParaIngles("Caneta", objetosIngles));
console.log(Object.keys(objetosIngles));
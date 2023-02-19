// Aprendendo sobre o conceito (chain of respnsability)

const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1';

    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'midi2';

    next()
}

const passo3 = contexto => {
    return contexto.valor3 = 'midi3'
}

const exec = (contexto, ...middlewares) => {
    const exePasso = indice => {
        middlewares && indice < middlewares.length && 
        middlewares[indice](contexto, () => {
            return exePasso(indice + 1)
        })
    }
    exePasso(0)
}

const contexto ={};
exec(contexto, passo1, passo2, passo3)

console.log(contexto)
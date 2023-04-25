// Executando hora sem precisar ficar atualizando com
// A função setInterval()

const mostraHora = () =>{

    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}


const timer = setInterval(() => {
    return console.log(mostraHora())
}, 1000)

setTimeout(()=> {
    clearInterval(timer)
}, 5000) //A cada 5 segundos para o processo


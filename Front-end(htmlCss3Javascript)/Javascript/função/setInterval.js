// Executando hora sem precisar ficar atualizando com
// A função setInterval()

const mostraHora = () =>{

    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

setInterval(()=> {
    console.log(mostraHora)
}, 1000)


setTimeout(()=>{
    clearInterval(mostraHora)
},1000)

let agora = new Date()
let morning = agora.getHours()



    if(morning >= 0 && morning <= 12){
        console.log(`Agora são ${morning} da manhã. Bom dia!`)
    } else if(morning >= 12 && morning <= 18){
        console.log(`Agora são ${morning} da tarde. Boa tarde!`)
    } else {
        console.log(`Agora são ${morning} da noite. Boa noite!`)
    }

//console.log(morning)
/*
Eu fiz esse relógio, por que já tinha estudado sobre javascript. Daí fiquei com tédio 
*/
let agora = new Date();
let hora = agora.getHours()

console.log(hora)

if(hora <= 12){
    console.log(`Agora são ${hora} horas da manhã`)
} else if(hora >= 12 && hora <= 18){
    console.log(`Agora são ${hora} horas da tarde`)
}else if(hora >= 18 && hora <= 23){
    console.log(`Agora são ${hora} horas da noite`)
}
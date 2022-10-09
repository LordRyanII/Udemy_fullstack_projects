let agora = new Date();
let hora = agora.getHours()

console.log(hora)

if(hora <= 12){
    console.log(`Agora são ${hora} da manhã`)
} else if(hora >= 12 || hora <= 18){
    console.log(`Agora são ${hora} da tarde`)
}else{
    console.log(`Agora são ${hora} da noite`)
}
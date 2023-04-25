class time {
    constructor(){
        const date = new Date()

        this.hora = date.getHours(); //é uma variavél
        this.minutos = date.getMinutes() //é uma variavél
    }
    displayTime(){
        if(this.hora > 0 && this.hora < 12){
            return console.log(`Agora são ${this.hora} horas e ${this.minutos} minutos da manhã`)
        } else if(this.hora > 12 && this.hora < 18){
            return console.log(`Agora são ${this.hora} horas e ${this.minutos} minutos da tarde`)
        } else {
            return console.log(`Agora são ${this.hora} horas e ${this.minutos} minutos da noite`)
        }
    }
}

let horas = new time()

console.log(horas.displayTime())
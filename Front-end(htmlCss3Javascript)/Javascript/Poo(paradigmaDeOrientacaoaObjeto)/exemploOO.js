class time {
    constructor(){
        const date = new Date()

        this.hora = date.getHours()
    }
    displayTime(){
        if(this.hora > 18){
            return console.log(`Agora são ${this.hora} da noite`)
        }
    }
}

let horas = new time()

console.log(horas)
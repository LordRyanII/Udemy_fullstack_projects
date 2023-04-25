//ampliando os estudos do .bind

function pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        
        console.log(this.idade)

    }.bind(this), 1000)
} //essa função gera um número a cada intervalo de 1segundo
//para ativar a contagem basta clickar ctrl+alt+n
//para PARAR a contagem basta clickar ctrl+alt+m

function pessoa(){
    this.idade = 0

    const self = this //da para criar uma variavel e assim evitar erros com o uso do "this"
                    //assim sendo o self esta sendo atribuido a idade de pessoas

    setInterval(function(){
        self.idade++
        
        console.log(self.idade)

    }.bind(self), 1000)
} 
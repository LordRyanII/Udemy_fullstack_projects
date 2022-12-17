//exemplo do uso do this

const obj = {
    name: 'John',
    greet: function(){
        console.log(`Olá, meu nome é ${this.name}`)
    }
}
obj.greet()//Imprime console o nome

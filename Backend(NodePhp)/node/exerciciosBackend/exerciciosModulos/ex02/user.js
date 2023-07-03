const Validador = require('./classEmail');

function verificaEmail (input){
    const validador = new Validador(input);
    return console.log(validador.validate())

}

verificaEmail('ryanoliveiram2015@gmail.com')
verificaEmail(123)
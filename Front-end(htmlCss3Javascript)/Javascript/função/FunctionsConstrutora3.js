// Aprendendo sobre o uso das funções construtoras:


function resultadoConcurso(nome, Sobrename){

    this.Nome = nome;
    this.Sobrename = Sobrename

    return console.log(`Resultado do concurso: ${this.Nome} ${this.Sobrename}. Aprovado, parabéns!`)

}


const Resultado = new resultadoConcurso('Ryan', 'Menezes')

Resultado
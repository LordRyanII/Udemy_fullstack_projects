function gerarNome(callback){

    let Nome = 'Ryan'

    callback(Nome)
}

gerarNome(name =>{
    console.log(`Meu nome é ${name}`)
})


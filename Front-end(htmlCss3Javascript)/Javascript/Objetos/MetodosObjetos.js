let pessoa = {
    nome: 'Renata',
    idade: 20
};

pessoa.GetDataNascimento = function(){
    let data = new Date(); //Construtor de datas 
    const Ano = data.getFullYear() // Pega o ano atual do sistema
    return Ano - this.idade 
};


console.log(pessoa.GetDataNascimento());

console.log(pessoa);
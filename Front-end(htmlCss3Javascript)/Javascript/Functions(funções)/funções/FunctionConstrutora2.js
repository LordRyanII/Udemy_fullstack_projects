//Outro Exemplo do uso de functions Construtoras:

function CriarSegundaPessoa(name, Sobrename){ //obrigatório nos paramêtros
    
    this.name = name
    this.Sobrename = Sobrename
    
}

let pessoa = new CriarSegundaPessoa('Renata', 'Alves')
console.log(pessoa)
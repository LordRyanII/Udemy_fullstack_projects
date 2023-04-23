//São funções que retornam objetos

function CriarPessoa(nome, sobrenome, idade){
    
    let dados = {
        nome: nome, 
        sobrenome: sobrenome, 
        idade: idade
    }

    if(nome.length > 10){

        return `${nome}, possuí mais de dez letras, total de letras: ${nome.length}`
    } else{
        return `${nome}, possuí menos de dez letras, total de letras: ${nome.length}`
    }
}

let dados1 = CriarPessoa('Joaquim Antônio', 'Alves', 20);
let dados2 = CriarPessoa('Renata', 'Alves', 20)

console.log(dados1); // Saída: Joaquim Antônio, possuí mais de dez letras, total de letras: 15
console.log(dados2); //Saída: Renata, possuí menos de dez letras, total de letras: 6

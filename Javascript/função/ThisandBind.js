const pessoa = {
    Saudacao: 'Bom dia!',
    falar(){ //pode criar uma funão sem a "chave"
        console.log(this.Saudacao)
    }
}
pessoa.falar()//imprime a saudação

const falar = pessoa.falar 
falar() //gera um UNDEFIELD, porquê a saudação estava contida na const pessoa


//para resolver

const FalarDePessoa = pessoa.falar.bind(pessoa)
FalarDePessoa() //vai acessar o this do objeto pessoa

const falar2 = pessoa.falar

falar2() //função bind não altera nenhum valor, apenas trás o valor já existente
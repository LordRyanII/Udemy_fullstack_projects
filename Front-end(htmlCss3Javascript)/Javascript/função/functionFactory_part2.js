//Caso real, precisamos validar a entrada de usuário em um site;
//O site é de notícias policiais, e contém conteúdo sensível


const dadosPessoa1 = {
    nome: 'Juliano',
    idade: 17
};

const dadosPessoa2 = {
    nome: 'Cátia',
    idade: 24
};

function validaEntrada(){

    if(dadosPessoa1.idade > 18){
        return `${dadosPessoa1.nome}, sua entrada foi autorizada. Bem-vindo`
        
    } if(dadosPessoa2.idade > 18){
        return `${dadosPessoa2.nome}, sua entrada foi autorizada. Bem-vindo`
    }
    else if(dadosPessoa1.idade < 18){
        return `${dadosPessoa1.nome}, Você é menor de idade. Não está autorizado`
    }
    else if(dadosPessoa2.idade < 18){
        return `${dadosPessoa2.nome}, Você é menor de idade. Não está autorizado`
    }
}

console.log(validaEntrada())
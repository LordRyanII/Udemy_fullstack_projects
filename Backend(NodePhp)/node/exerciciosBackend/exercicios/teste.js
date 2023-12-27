//Estrutura de dados:
// Variaveis;
//Loops;
//Condicionais;
//Funções;

function verificaNome(nome){
    const nomeJunin = /(junin)|(juninho)/i;
    if(nomeJunin.test(nome)){
        return console.log(`Você é o ${nome}`)
    }else {
        return console.log(`Não é`)
    }
}

verificaNome('Junin')
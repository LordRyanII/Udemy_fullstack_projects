// Criando arquivos JSON

const fs = require('fs');

const produto = {
    tipo: 'Celular',
    modelo: 'Motorola v-8',
    preco: 'R$' + 2500,
    desconto: 0.15
}


fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), error =>{
    if (error === null){
        console.log('Arquivo Salvo!')
    }
    else{
        console.log(error)
    }
})
const fileSystem = require('fs');

const caminho = __dirname + '/arquivo.json'

// Sincrono...

const conteudo = fileSystem.readFileSync(caminho, 'utf-8');

console.log(conteudo)

// Assincrono...

fileSystem.readFile(caminho, 'utf-8', (error, conteudo) =>{
    const config =  JSON.parse(conteudo)

    console.log(`${config.db.host}: ${config.db.port}`)
})

// Outro metódo, ideal para JSONS no localHost:]

const config = require('./arquivo.json')

console.log(config.db)

// Explicando o __dirname
/*
    1- Ele serve para indicar um diretório;
    2- Apenas dando console.log(__dirname) //Ele irá retornar todas as pastas aonde estão os arquivos;
    3- Ele é uma constante global
    4- __dirname + './ nome do arquivo' você consegue acessar o arquivo
*/
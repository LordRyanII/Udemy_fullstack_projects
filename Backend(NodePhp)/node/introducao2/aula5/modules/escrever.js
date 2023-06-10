const fs = require('fs').promises;
const path = require('path'); // path é para lidar com caminhos

//Cria variavél          listar os caminhos   ex02 e terá esse nome
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt'); //Caminho aonde queremos escrever

//Escrever no arquivo|diretório da pasta| frase | ex03
fs.writeFile(caminhoArquivo, 'Frase1\n', { flag: 'a', encoding: 'utf-8'});


// ex02 => Significa que o arquivo será criado na pasta após o nosso diretório principal
// ex03 => São as flags, paramêtros, nesse caso significa que queremos que apague o conteúdo toda a vez que detectar que o conteúdo já existe. Assim fazendo "PUT"

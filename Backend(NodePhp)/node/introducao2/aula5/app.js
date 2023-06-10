const path = require('path'); // path é para lidar com caminhos
const caminhoArquivo = path.resolve(__dirname, 'teste.json'); //Caminho aonde queremos escrever
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');
const { json } = require('stream/consumers');

// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Maria'},
//     {nome: 'Renata'},
//     {nome: 'Michell'}
// ];


// const json = JSON.stringify(pessoas, '', 2); // converte o objeto para json

// escreve(caminhoArquivo, json);

async function lerArquivo(caminho){
    const dadosArquivos = await ler(caminho);
    return renderizaDados(dadosArquivos);
};

function renderizaDados(dados){
    dados = JSON.parse(dados);
    dados.forEach(element => {
        console.log(element.nome)
    });
}

lerArquivo(caminhoArquivo)
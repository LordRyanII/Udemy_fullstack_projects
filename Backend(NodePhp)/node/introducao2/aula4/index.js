const fs = require('fs').promises; //Serve para ler arquivos
const { error } = require('console');
const path = require('path'); //para lidar com caminhos

async function readdir(rootdir){
    rootdir = rootdir || path.resolve(__dirname)
    const files = await fs.readdir(rootdir);
    walk(files);
};

function walk(files){
    for(let file of files){
        console.log(file);
    }
};

readdir(aula4)
// Aprendendo sobre promise.resolve promise.reject  

function aleatorioTempo(min, max){
    min * 1000;
    max * 1000;
    return Math.floor(Math.random() * (max-min) + min);
}; //Cria em milisegundos um tempo aleatório


function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=> {
        if(typeof msg !== 'string'){
            reject('Erro');
            return; //Foi necessário adicionar o return para o erro
        }
        setTimeout(()=> {
            resolve(msg.toUpperCase() + ' -Passei em uma promise');
            return;
        }, tempo);
    });
};

function baixaPagina(){
    const emCache = true;

    if(emCache) {
        return Promise.reject('página em cache'); //com reject caí no catch

    }else{
        return esperaAi('Baixei a página', 3000)
    }
};

baixaPagina()
    .then(dadosPagina => {
        return console.log(dadosPagina)
    })
    .catch(error => {
        console.log(error)
    })
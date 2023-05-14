function aleatorioTempo(min=0, max= 3){
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

async function executaPromise(){
    try{
        const fase1 = await esperaAi('fase1', aleatorioTempo());
        console.log(fase1);

        const fase2 = await esperaAi('fase2', aleatorioTempo());
        console.log(fase2);

        const fase3 = await esperaAi('fase3', aleatorioTempo());
        console.log(fase3);

    }catch(erro){
        console.log(erro);
    }
};

executaPromise()
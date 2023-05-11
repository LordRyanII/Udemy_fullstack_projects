// Exemplo de uso de promises:

function aleatorioTempo(min, max){
    min * 1000;
    max * 1000;
    return Math.floor(Math.random() * (max-min) + min);
}; //Cria em milisegundos um tempo aleatório


function esperaAi(msg, tempo, cb){
    setTimeout(()=> {
        if(cb) cb(); //Verifica primeiro se há um callBack, se sim o executa primeiro
        console.log(msg)
    }, tempo);
};

esperaAi('Frase1', aleatorioTempo(1, 3), function(){
    esperaAi('Frase2', aleatorioTempo(1, 3), function(){
        esperaAi('Frase3', aleatorioTempo(1, 3), function(){
        });
    });
});


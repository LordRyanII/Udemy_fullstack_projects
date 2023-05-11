// Exemplo de uso de promises:

function aleatorioTempo(min, max){
    min * 1000;
    max * 1000;
    return Math.floor(Math.random() * (max-min) + min);
}; //Cria em milisegundos um tempo aleatório


function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=> {
        if(typeof msg !== 'string') reject('BAD VALUE ') //Aqui temos uma verificação antes de executar o setTimeout
        setTimeout(()=> {
            resolve(msg)
        }, tempo);
    });
};

esperaAi('Buscando dados da BASE de dados', aleatorioTempo(1,4))
    .then(resposta => {
        console.log(resposta); //Mostra a frase 1
        return esperaAi(33333, aleatorioTempo(1,4));
    })
    .then(resposta => {
        console.log(resposta); //Mostra a frase 2
        return esperaAi('Exibe Dados na BASE', aleatorioTempo(1,4));
    })
    .then(resposta => {
        console.log(resposta); //Mostra a frase 3
    })
    .catch(error => {
        console.log('ERRO:', error)
    });

console.log('Essa mensagem será exibida antes de todas as promises')
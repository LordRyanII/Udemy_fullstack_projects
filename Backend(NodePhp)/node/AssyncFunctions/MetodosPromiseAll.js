// Aprendendo sobre promise.all promise.race promise.resolve promise.reject  

function aleatorioTempo(min, max){
    min * 1000;
    max * 1000;
    return Math.floor(Math.random() * (max-min) + min);
}; //Cria em milisegundos um tempo aleatório


function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=> {
        if(typeof msg !== 'string') reject('BAD VALUE ') //Aqui temos uma verificação antes de executar o setTimeout
        setTimeout(()=> {
            resolve(msg.toUpperCase() + ' -Passei em uma promise')
        }, tempo);
    });
};

const promises = [
    'Primeiro Valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    'Outro valor'
];

Promise.all(promises) //essa Promise(em maiúsculo) é do construtor não do array
    .then( valor => {
         console.log(valor)
    })
    .catch(error => {
         console.log(error)
    });

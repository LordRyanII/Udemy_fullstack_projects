//Retorne um número aleatório;
//Se o número for maior que 0.5 é resolve, se não reject;
//Use promises

const promise = new Promise((resolve, reject) => {
    const result = Math.random().toFixed(1);
    if (result >= 0.5) {
      resolve(result);
    } else {
      reject(result +' é menor que 0.5');
    }
  });
  
  promise
    .then(resposta => {
    console.log('Promise resolvida:', resposta);
  })
    .catch(resposta => {
    console.log('Promise rejeitada:', resposta);
  });
  
fetch('pessoas.json')
  .then(resposta => resposta.json() //Aqui aguardamos uma promise de json
  .then(json => { //pegamos essa promise e jogamos em uma função
    return carregaDados(json)
  }));

function carregaDados(json){ //Aqui tratamos os dados retornados da função
  const table = document.querySelector('.table');  //Pegamos a tabela através do DOM

  for(let pessoa of json) {  //Criamos as interações, adicionamos cada dado na tabela
    const tr = document.createElement('tr'); // Criamos uma linha vertical, aonde colocaremos os dados
    let td1 = document.createElement('td'); // O td é a "célula" aonde o dado ficará
    td1.innerHTML = pessoa.nome; // escrevemos nessa "célula" o nome da pessoa do json
    tr.appendChild(td1); //Dizemos que a "célula" é "filho" da linha vertical, ou seja pertence aquela linha

    let td3 = document.createElement('td');
    td3.innerHTML = pessoa.idade;
    tr.appendChild(td3);

    let td4 = document.createElement('td');
    td4.innerHTML = pessoa.salario;
    tr.appendChild(td4);

    let td5 = document.createElement('td');
    td4.innerHTML = pessoa.empresa;
    tr.appendChild(td5);

    
    table.appendChild(tr) // Após adicionamos todas as linhas verticais com os dados na nossa tabela

  }
  const resultado = document.querySelector('.resultado'); //Adicionamos na nossa div os dados 
  resultado.appendChild(table); //Dizemos que a "tabela" é "filho" da nossa div resultado

}
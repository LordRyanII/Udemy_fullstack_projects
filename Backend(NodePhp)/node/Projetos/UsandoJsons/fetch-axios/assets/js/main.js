fetch('pessoas.json')
  .then(resposta => resposta.json()
  .then(json => {
    return carregaDados(json)
  }));

function carregaDados(json){
  const table = document.querySelector('.table');

  for(let pessoa of json) {
    const tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.innerHTML = pessoa.nome;
    tr.appendChild(td1);

    let td3 = document.createElement('td');
    td3.innerHTML = pessoa.idade;
    tr.appendChild(td3);

    let td4 = document.createElement('td');
    td4.innerHTML = pessoa.salario;
    tr.appendChild(td4);

    let td5 = document.createElement('td');
    td4.innerHTML = pessoa.empresa;
    tr.appendChild(td5);

    
    table.appendChild(tr)

  }
  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table)

}
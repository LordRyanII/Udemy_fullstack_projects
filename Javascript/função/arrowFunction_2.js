//let Arrow = () =>

function pessoa() {
    this.idade = 0;
  
    // Armazena a chamada do setInterval() em uma variável
    const testando_arrows = setInterval(() => { //usando arrow function
      this.idade++;
      console.log(`A idade atual é ${this.idade} anos`);
    }, 1000); //literalmente fica " Defina um tempo de contagem para para a idade dessa pessoa que atualmente é 0 (this.idade=0), que seja até 10 segundos (1000))"
  
    // Cancela a chamada do setInterval() após 10 segundos
    let pare_a_contagem = setTimeout(() => {
      console.log('Parando a contagem...');
      clearInterval(testando_arrows);
    }, 10000);
  }
new pessoa //Ainda não sei muito sobre isso, mas segui o professor
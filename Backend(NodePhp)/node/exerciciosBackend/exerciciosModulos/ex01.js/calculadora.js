 class CalculadoraBasica {
    constructor(acao, valor1, valor2){
        this.acao = acao,
        this.valor1 = valor1,
        this.valor2 = valor2
    }
    soma(){
        if(this.acao === '+'){
            return console.log(parseInt(this.valor1) + parseInt(this.valor2));
        }
        
    }
    subtracao(){
        if(this.acao === '-'){
            return console.log(parseInt(this.valor1) - parseInt(this.valor2));
        }
        
    }
    multiplicacao(){
        if(this.acao === 'x'){
            return console.log(parseInt(this.valor1) * parseInt(this.valor2));
        }        

    }
}

const calcularSoma = new CalculadoraBasica('+', 50, '3');
calcularSoma.soma();
const calcularSubtracao = new CalculadoraBasica('-', 50, '3');
calcularSubtracao.subtracao();
const calcularMultiplicacao = new CalculadoraBasica('x', 50, '3');
calcularMultiplicacao.multiplicacao();


module.exports = CalculadoraBasica
//Entendo as classes
/*
1ª São funções Construtoras;
2ª Precisam ser instânciadas;
3ª Por serem do tipo Contrutora, são "instânciavéis" 
*/

class Lancamento {
    constructor(nome = 'Generico', valor = 0){ //É necessário usar o constructor() como paramêtros de função; 
        this.nome = nome
        this.valor = valor
    }
} //Sintaxe básica

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.Lancamentos = []
    }

    AddLancamento(... Lancamentos){
        Lancamentos.forEach(element => {
            this.Lancamentos.push(element)
        });
    }
    sumario(){
        let Valorconsolidado = 0;
        this.Lancamentos.forEach(element =>{
            Valorconsolidado += element.valor
        })

        return Valorconsolidado
    }
}

const Salario = new Lancamento('Salario', 4500);
const ContaDeLuz = new Lancamento('Luz', -220);

const Contas = new CicloFinanceiro(6, 2018)

Contas.AddLancamento(Salario, ContaDeLuz)

console.log(Contas.sumario())
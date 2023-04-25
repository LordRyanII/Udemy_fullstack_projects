//Criaremos uma função que irá calcular o Imc de uma pessoa;
// No final irá retornar uma mensagem Contendo os dados informados;


function CalculaImc(nome, peso, altura){
    let dados = {
        Nome: nome,
        Peso: peso,
        Altura: altura
    }

    const {Nome,Peso, Altura} = dados

    function res(){
        let resultadoIMC = Peso / (Altura ** 2);

        if(resultadoIMC < 19){
            return `${Nome} você está com baixo peso!`

        } else if(resultadoIMC > 19 && resultadoIMC < 25){
            return `${Nome} você está com um peso ideal! PARABÉNS`

        } else if(resultadoIMC > 25  && resultadoIMC < 30){
            return `${Nome} você está com Sobrepeso! Fique em atenção. Considere exercícios`

        } else if(resultadoIMC > 30){
            return `${Nome} Atenção. Você está acima do peso, provavelmente com Obesidade.`
        }
    }

    return res();
}

console.log(CalculaImc('Kayna', 90, 1.85));



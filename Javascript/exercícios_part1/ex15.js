/* 
    Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
    possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
    comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
    que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
    “Não trabalhamos com este tipo de automóvel aqui”.
*/

function Compra(veiculo){
    switch(veiculo){
    case 'hatch':
        return console.log('Compra Efetuada com Sucesso!');
        break;
    case 'uno':
        return console.log('Tem certeza que deseja prefere esse modelo?');
        break;
    default:
        return console.log('Não trabalhamos com este veiculo aqui')
    }
    
}

console.log(Compra('hatch'));
console.log(Compra('uno'));
console.log(Compra('civic'))
/*
    Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
    dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function verificaDia(dia) {
    switch (dia) {
      case 1: //Domingo
      case 7: //Sabado
        return console.log('Fim De Semana!');
        break;
      case 2://segunda
      case 3://terça
      case 4://quarta
      case 5://quinta
      case 6://sexta
        return console.log('Dias Utéis');
        break;
      default:
        return console.log('Dia inválido');
    }
  }
  console.log(verificaDia(1));
  console.log(verificaDia(3));
  console.log(verificaDia(0));
  
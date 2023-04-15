// Formatando data para Formato BR

function zeroEsquerda(num) {

    return num >= 10 ? num : `0${num}`
}

const verificaHorario = () => {
    const data = new Date();
    const hora = data.getHours();
    if (hora >= 0 && hora < 12) {
      return 'Manhã';
    } else if (hora >= 12 && hora < 18) {
      return 'Tarde';
    } else {
      return 'Noite';
    }
  };
  

console.log(verificaHorario())

function FormataDate() {
    const data = new Date();
    const dia = zeroEsquerda(data.getDate());
    const mes = data.toLocaleString('pt-BR', { month: 'long' }); //Formata o mês de Number para string com os meses do calendario brasileiro
    const ano = data.getFullYear()
    const hora = zeroEsquerda(data.getHours());
    const minutos = zeroEsquerda(data.getMinutes());

    return console.log(`${dia}/${mes}/${ano}
    Agora são Exatamente ${hora}:${minutos} da ${verificaHorario()}`)
}

FormataDate()
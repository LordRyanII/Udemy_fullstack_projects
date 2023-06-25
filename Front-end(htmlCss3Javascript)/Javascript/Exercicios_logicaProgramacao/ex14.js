class Tempo {
  constructor() {
    this.data = new Date();
  }

  Horas() {
    const minutos = this.data.getMinutes();
    let horaAtual = setInterval(() => {
      minutos++
    }, 10000);

  }

  Data() {
    const data = this.data;
    const dias = data.getDay();
    const mes = data.getMonth();
    const ano = data.getFullYear();

    switch (mes) {
      case 0:
        return 'janeiro';
      case 1:
        return 'fevereiro';
      case 2:
        return 'março';
      case 3:
        return 'abril';
      case 4:
        return 'maio';
      case 5:
        return 'junho';
      case 6:
        return 'julho';
      case 7:
        return 'agosto';
      case 8:
        return 'setembro';
      case 9:
        return 'outubro';
      case 10:
        return 'novembro';
      case 11:
        return 'dezembro';
      default:
        return '';
        
    }
    console.log(`${dias}/${mes}/${ano}`)
  }
}

const data = new Tempo();
console.log(data.Data())


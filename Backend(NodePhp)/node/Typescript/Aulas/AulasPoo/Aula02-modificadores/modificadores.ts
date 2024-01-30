class Cachorro {
  public nome: string;
  private sexo: string;

  constructor(nome: string, sexo: string) {
    this.nome = nome;
    this.sexo = sexo;
  }
  public caracteristicasCachorro() {
    return {
      Nome: this.nome,
      Sexo: this.sexo,
    };
  }
}

const cachorroNelson = new Cachorro("Nelson", "Masculino");
const cadelaVirgnia = cachorroNelson.nome = 'Virgnia'
console.log(cadelaVirgnia);

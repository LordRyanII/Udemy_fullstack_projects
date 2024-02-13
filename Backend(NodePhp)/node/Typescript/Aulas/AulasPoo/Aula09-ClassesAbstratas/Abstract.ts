export abstract class Personagem {
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
    protected sexo: string
  ) {}
  public atacar(personagem: Personagem): void {
    this.bordao();
    console.log(`${this.nome} está atacando...`);
    personagem.perderVida(this.ataque);
  }

  public perderVida(forcaAtaque: number): void {
    if (this.vida === 0 || this.vida - forcaAtaque <= 0) {
      return console.log(`${this.nome} foi morto`);
    }
    this.vida -= forcaAtaque;
    console.log(`${this.nome} foi atacado[a]...`);
    console.log(`${this.nome} agora tem ${this.vida} de vida`);
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  public bordao(): void {
    if (this.sexo === "Masculino") {
      const frasesAleatoria = [
        "Eu sou um guerreiro valente",
        "Aaaaargh",
        "Somente isso?",
        "hahahaha",
        "Sinta a ira de um deus",
      ];
      const tamanhoFrases = frasesAleatoria.length;
      const falas = frasesAleatoria[Math.floor(Math.random() * tamanhoFrases)];

      return console.log("Guerreiro: " + falas);
    }
    const frasesAleatoria = [
      "Eu sou uma guerreira valente",
      "Aaaaargh",
      "Somente isso?",
      "hahahaha",
      "Sinta a ira de um deusa",
    ];
    const tamanhoFrases = frasesAleatoria.length;
    const falas = frasesAleatoria[Math.floor(Math.random() * tamanhoFrases)];

    return console.log(falas);
  }
}
export class Monstro extends Personagem {
  public bordao(): void {
    console.log("Monstro: Sou um monstro feroz e sem escrúpulos");
  }
}

const guerreiro = new Guerreira("Guerreiro", 100, 1000, "Masculino");
const monstro = new Monstro("Monstro", 100, 1000, "Masculino");

guerreiro.atacar(monstro);
monstro.atacar(guerreiro);
guerreiro.atacar(monstro);
monstro.atacar(guerreiro);
guerreiro.atacar(monstro);
monstro.atacar(guerreiro);

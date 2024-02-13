//Método que pode ser usado sem ser instanciado

export class User {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string
  ) {}

  public static falaOi(): void {
    console.log("Oi");
  }
  public static criarPessoa(nome: string, sobrenome: string): User {
    return new User(nome, sobrenome, 0, "000");
  }
}

const pessoa1 = User.criarPessoa("Ryan", "Menezes");

User.falaOi(); //Chamada para o método estático

console.log(pessoa1);

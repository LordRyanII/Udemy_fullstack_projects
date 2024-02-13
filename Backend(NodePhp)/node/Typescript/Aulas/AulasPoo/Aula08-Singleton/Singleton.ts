//Padrão de projeto GoF

export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string
  ) {}
  public connect(): void {
    return console.log(
      `Conectado: ${this.host}, ${this.user}, ${this.password}`
    );
  }
  public static getDatabase(
    host: string,
    user: string,
    password: string
  ): Database {
    if (Database.database) {
      console.log("Criando nova instância");
      return Database.database;
    }
    console.log("Retornando instância");
    Database.database = new Database(host, user, password);

    return Database.database;
  }
}

const Data1 = Database.getDatabase("localhost", "root", "123456");
Data1.connect(); // Conectado: localhost, root, 123456

const Data2 = Database.getDatabase("localhost", "root", "123456");
Data2.connect(); // Conectado: localhost, root, 123456

/*
 * Descrição: Este código Java é parte de um projeto de estudo.
 * Autor: Ryan Menezes
 * 
 * Classe: objetoPessoa
 * - Método: objetoPessoa
 *   Descrição: Construtor da classe objetoPessoa.
 *   Parâmetros:
 *     - nome: Uma string representando o nome da pessoa.
 *     - idade: Um número representando a idade da pessoa.
 */

class objetoPessoa {
    private String Nome;
    private int Idade;

    objetoPessoa(String nome, int idade) {
        this.Nome = nome;
        this.Idade = idade;

    }

    String retornaDados() {
        String dadosFormatados = String.format("Nome: %s, Idade: %s", this.Nome, this.Idade);

        return dadosFormatados;
    }

}

class Principal {
    public static void main(String[] args) {
        objetoPessoa pessoa1 = new objetoPessoa("Ryan", 22);
        objetoPessoa pessoa2 = new objetoPessoa("Renata", 21);
        objetoPessoa pessoa3 = new objetoPessoa("Frederico", 21);

        String[] dadosPessoa = { pessoa1.retornaDados(), pessoa2.retornaDados(), pessoa3.retornaDados() }; // Criando
                                                                                                           // array de
                                                                                                           // objetos

        for (Object pessoas : dadosPessoa) {
            System.out.println(pessoas);
        }
    }
}

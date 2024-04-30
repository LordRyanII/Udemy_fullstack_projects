//Aprendendo a usar o scanner
/*
 * Tipos de scanners
 * 
 * nextLine() -> Usado para strings
 * nextDouble() -> Usado para números decimais
 * nextInt() -> Usado para números inteiros
 * next() -> Usado para palavras
 * 
 * Sintaxe básica
 * Scanner entrada = new Scanner(System.in); // Define a entrada -> Aponta para
 * o teclado
 * String nome = entrada.nextLine();
 * 
 */

import java.util.Scanner;

class App {
    static String getNome() {
        Scanner entrada = new Scanner(System.in);
        String nome = entrada.nextLine();

        return nome;
    }

    static String getSobrenome() {
        Scanner entrada = new Scanner(System.in);
        String sobrenome = entrada.nextLine();

        return sobrenome;
    }

    static int getIdade() {
        Scanner entrada = new Scanner(System.in);
        int idade = entrada.nextInt();

        return idade;
    }

    static String verificaDados(String nome, String sobrenome, int idade) {
        
        String dadosVerificados;

        if (idade >= 18) {
            dadosVerificados = String.format("Olá %s %s, você tem %d anos e é maior de idade.", nome, sobrenome, idade);
            return dadosVerificados;
        }

        return dadosVerificados = String.format("Infelizmente com %s, não pode entrar nesse site", idade);

    }

    static void imprimeDadosScanner() {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Aprendendo a usar o scanner");

        System.out.println("Digite o seu nome:");
        String nome = getNome();

        System.out.println("Digite o seu sobrenome:");
        String sobrenome = getSobrenome();

        System.out.println("Por fim a sua idade");
        int idade = getIdade();

        System.out.println("Verificando dados...");
        System.out.println(verificaDados(nome, sobrenome, idade));
        entrada.close();
    }

    public static void main(String[] args) throws Exception {
        imprimeDadosScanner();
    }
}

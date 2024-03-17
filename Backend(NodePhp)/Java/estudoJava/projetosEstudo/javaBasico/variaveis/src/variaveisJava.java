package estudoJava.projetosEstudo.variaveis.src;

public class variaveisJava {

    public static int getSalario() {
        int salario = 5001; //

        return salario;
    }

    public static void main(String[] args) {

        int salarioMedia = getSalario();
        String nome = "Ryan";
        int Idade = 22;
        double altura = 1.70;
        String dadosUsuario = String.format(
                "Exibindo dados: Nome: %s, Idade: %d, Altura: %s, e média salaria: %d", nome, Idade, altura,
                salarioMedia);
        System.out.println(dadosUsuario); // Imprime o valor da variável 'Nome' que é uma string
    }
}
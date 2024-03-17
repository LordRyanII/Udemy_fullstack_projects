public class App {
    public static void main(String[] args) throws Exception {
        // Arrays em java

        // indexes 0 1 2 3
        String[] dadosUsuario = { "nome: Ryan", "Conjugue: Renata", "Amigo: Luiz", "Chefe: Fernando" }; // Isso é um
                                                                                                        // array

        String[][] usuarios = { dadosUsuario, { "Rafael", "João", "Pedro" } }; // Isso é um array, que contém outro
                                                                               // array

        System.out.println(dadosUsuario[0]); // Acessa o primeiro elemento do array, que é Ryan
        System.out.println("------------------------");
        System.out.println(dadosUsuario[1]);// Acessa o segundo elemento do array, que é Renata
        System.out.println("------------------------");
        System.out.println(dadosUsuario[2]);// Retorna o terceiro elemento Luíz
        System.out.println("------------------------");
        System.out.println(dadosUsuario[3]);// Retorna o terceiro elemento Fernando
        System.out.println("------------------------");
        System.out.println(usuarios[0][1]); // Ele pega o primeiro elemento do array (que é o vetor de nomes), e o
                                            // segundo elemento pega o primeiro elemento do vetor (Ryan)

    }
}

public class App {
    static void retornaTexto(String nome) {
        char acentoA = 'á';
        String texto = String.format("Ol%s %s, bem-vindo", acentoA, nome);

        System.out.println(texto);
    }

    public static void main(String[] args) throws Exception {
        retornaTexto("Juninho");
    }
}

//String
//number
//Char
//Boolean

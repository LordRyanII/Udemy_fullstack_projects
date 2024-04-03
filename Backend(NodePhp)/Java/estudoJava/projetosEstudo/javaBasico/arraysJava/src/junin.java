import java.util.Random;

public class junin {

    static void verificaJuninEGay(boolean chave) {
        if (chave == false) {
            System.out.println("Não é gay");
        } else {
            System.out.println("É gay");
        }
    }

    static void sortearUmaFraseMotivacional() {
        String[] frases = { "Vai dar certo", "Não vai dar não", "Vamo dalheee", "Aí sim", "Só pelos curso" };

        Random gerarNumero = new Random();
        int numeroAleatorio = gerarNumero.nextInt(5);
        System.out.println(frases[numeroAleatorio]);

    }

    public static void main(String[] args) {
        String nome = "Juninho";
        String template = String.format("Olá bem-vindo %s", nome);
        System.out.println(template);
        verificaJuninEGay(true);
        sortearUmaFraseMotivacional();
    }
}

public class App {

    public static void main(String[] args) throws Exception {
        String[] nomes = { "Ana", "Maria", "Pedro", "Joao" };

        for (int i = 0; i < nomes.length; i++) {
            if (nomes[i] == "Joao") {
                System.out.println(nomes[i]); // Retorna o João
            }
        }
    }
}

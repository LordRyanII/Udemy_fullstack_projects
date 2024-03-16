public class App {

    static void listaUsuarios(String[] nomes) {
        for (int x = 0; x <= nomes.length; x++) {
            System.out.println("Nome: " + nomes[x]);
        }
    }

    public static void main(String[] args) throws Exception {
        String[] nomes = { "Ryan", "Renata", "Luiz" };

        listaUsuarios(nomes);
    }
}

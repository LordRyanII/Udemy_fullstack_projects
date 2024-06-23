class App {

    static String verificaLista(String dado) {
        String[] listaCoisa = { "cachorro", "gato", "bola", "macaco", "testes" };
        String resultado = "";
        for (int i = 0; i < listaCoisa.length; i++) {
            if (listaCoisa[i] == dado) {
                return resultado = "Achado " + listaCoisa[i];
            }
            return resultado = "Não encontrei o resultado para " + dado;

        }
        return resultado;

    }

    public static void main(String[] args) throws Exception {
        System.out.println(verificaLista("cachorro"));
        System.out.println(verificaLista("elefante"));

    }
}

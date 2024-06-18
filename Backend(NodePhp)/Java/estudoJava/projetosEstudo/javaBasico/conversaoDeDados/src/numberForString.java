class numberForString {
    public static void main(String[] args) throws Exception {
        // converter numéros (int) para string;
        Integer numero1 = 200; // Tipo wrapper, int é primitivo, com isso não tem essas novas funções

        String numero2 = numero1.toString();

        System.out.println(numero2);

        // Converter valor primitivo para string
        int numero3 = 5;

        String numero4 = Integer.toString(numero3); // Converte o valor primitivo para string

        System.out.println(numero4);
    }
}

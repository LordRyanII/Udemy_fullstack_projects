package services;

class Cliente {
    static String Clientes(String nome) {
        return nome;
    }

    public static void main(String[] args) {
        String cliente1 = Clientes("Ryan");
        String cliente2 = Clientes("Isabela");
        System.out.println(cliente1);
        System.out.println(cliente2);
    }
}
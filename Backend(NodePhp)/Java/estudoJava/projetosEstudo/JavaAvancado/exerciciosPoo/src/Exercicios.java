public class Exercicios {

    static void tabuada(int numero) {
        System.out.print("Tabuada do " + numero + ":\n");

        for (int i = 0; i <= 10; i++) {
            int resultado = numero * i;

            System.out.printf("%d X %d = %d \n", numero, i, resultado);

        }
    }
    public static void main(String[] args) {
        tabuada(10);
    }
}

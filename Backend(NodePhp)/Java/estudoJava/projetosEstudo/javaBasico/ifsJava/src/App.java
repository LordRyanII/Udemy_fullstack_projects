
public class App {
    static String isParImpar(int number) {
        if (number % 2 == 0) {
            return "Par";
        } else {
            return "Impar";
        }
    }

    public static void main(String[] args) throws Exception {
        String numero1 = isParImpar(55);
        String numero2 = isParImpar(20);
        String numero3 = isParImpar(108);
        System.out.println(numero1);
        System.out.println(numero2);
        System.out.println(numero3);
    }
}

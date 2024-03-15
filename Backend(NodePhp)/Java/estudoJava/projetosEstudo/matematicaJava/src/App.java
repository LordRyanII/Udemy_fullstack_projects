public class App {

    static int somar(int numero1, int numero2) {
        return numero1 + numero2;
    }

    static int subtrair(int numero1, int numero2) {
        return numero1 - numero2;
    }

    static int multiplicar(int numero1, int numero2) {
        return numero1 * numero2;
    }

    static int dividir(int numero1, int numero2) {
        return numero1 / numero2;
    }

    static int restoDivisao(int numero1, int numero2) {
        return numero1 % numero2;
    }

    public static void main(String[] args) throws Exception {
        System.out.println(somar(5, 3)); // Soma dois valores
        System.out.println(subtrair(5, 3)); // subtrair dois valores
        System.out.println(multiplicar(5, 3)); // multiplica dois valores
        System.out.println(dividir(5, 1)); // Divide dois valores
        System.out.println(restoDivisao(5, 3)); // Retorna o resto da divisão (quando há resto)
    }
}

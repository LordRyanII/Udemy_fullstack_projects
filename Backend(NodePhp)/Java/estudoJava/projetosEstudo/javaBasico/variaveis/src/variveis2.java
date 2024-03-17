package estudoJava.projetosEstudo.variaveis.src;

class variveis2 {
    static void soma(int args1, int args2) {
        int arg1 = args1;
        int arg2 = args2;
        int soma = arg1 + arg2;
        System.out.println("Resultado " + soma);
    }

    static void multiplicacao(int num1, int num2) {
        System.out.println("O resultado: " + (num1 * num2));
    }

    public static void main(String[] args) { //Alt+b run java
        soma(15, 16);
        multiplicacao(5, 5);
    }
}


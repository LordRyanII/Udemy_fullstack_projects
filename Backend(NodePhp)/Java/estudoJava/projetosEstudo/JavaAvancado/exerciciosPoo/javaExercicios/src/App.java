import java.util.Scanner;

class App {
    static void headerCalculadora() {
        System.out.println("#####################################");
        System.out.println("### App De Cálculo De Desconto ###");
        System.out.println("#####################################");
        System.out.println("Digite o valor do produto: ");
    }

    static int valorDescontoCalculado(int valorProduto, int valorDesconto) {
        int valorDescontoCalculado = (valorProduto * valorDesconto) / 100;
        return valorDescontoCalculado;
    }

    static void calculadoraDesconto() {
        Scanner scanner = new Scanner(System.in);
        int valorProduto = scanner.nextInt();
        System.out.println("##########################################");
        System.out.println("Agora digite o valor do desconto");
        int valorDesconto = scanner.nextInt();
        int valorDescontoCalculado = valorDescontoCalculado(valorProduto, valorDesconto);
        System.out.println("Obtendo resultado...");
        System.out.println("#######################################");
        System.out.println("Valor do produto com desconto: " + valorDescontoCalculado);
        System.out.println("#######################################");
        System.out.println("Esse valor reflete o resultado final, o preço final com desconto.");
        String templateString = String.format(
                "Valor do desconto: %d \n Valor do produto: %d \n Valor total com Desconto: %d", valorDesconto,
                valorProduto, valorDescontoCalculado);
        System.out.println(templateString);
    }

    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(System.in);
        headerCalculadora();
        calculadoraDesconto();
        scanner.close();
    }
}

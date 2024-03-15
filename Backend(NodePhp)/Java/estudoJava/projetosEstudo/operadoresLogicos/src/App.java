public class App {

    static void validaIdade(int idade) {
        String mensagemValidacao = idade >= 18 && idade < 60 ? String.format("Com %s Você é adulto ainda", idade)
                : String.format("Com %s você já é considerado idoso", idade);

        System.out.println(mensagemValidacao);
    }

    public static void main(String[] args) throws Exception {
        validaIdade(21);
        validaIdade(61);
    }
}

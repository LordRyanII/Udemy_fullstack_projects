import java.time.OffsetDateTime;

public class App {

    static String formataMeses(int mes) {
        String nomeDoMes = "";
        switch (mes) {
            case 1:
                nomeDoMes = "Janeiro";
                break;
            case 2:
                nomeDoMes = "Fevereiro";
                break;
            case 3:
                nomeDoMes = "Março";
                break;
            case 4:
                nomeDoMes = "Abril";
                break;
            case 5:
                nomeDoMes = "Maio";
                break;
            case 6:
                nomeDoMes = "Junho";
                break;
            case 7:
                nomeDoMes = "Julho";
                break;
            case 8:
                nomeDoMes = "Agosto";
                break;
            case 9:
                nomeDoMes = "Setembro";
                break;
            case 10:
                nomeDoMes = "Outubro";
                break;
            case 11:
                nomeDoMes = "Novembro";
                break;
            case 12:
                nomeDoMes = "Dezembro";
                break;
            default:
                nomeDoMes = "Mês Inválido!";
        }
        return nomeDoMes;
    }

    public static void main(String[] args) throws Exception {
        OffsetDateTime data = OffsetDateTime.now();
        int dia = data.getDayOfMonth();
        int mes = data.getMonthValue();
        int ano = data.getYear();
        String mesFormatado = formataMeses(mes);

        System.out.println("Hoje é dia " + dia + " do mês " + mesFormatado + " " + ano);
    }
}

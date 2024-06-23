class App {
    /**
     * @param dia
     * @return "dia da semana em pt-br"
     */

    static String diasSemana(int dia) {
        String diaSemana = "";
        switch (dia) {
            case 0:
                return diaSemana = "Domingo";
            case 1:
                return diaSemana = "Segunda-feira";
            case 2:
                return diaSemana = "Terça-feira";
            case 3:
                return diaSemana = "Quarta-feira";
            case 4:
                return diaSemana = "Quinta-feira";
            case 5:
                return diaSemana = "Sexta-feira";
            case 6:
                return diaSemana = "Sábado";
        }
        return diaSemana;
    }

    public static void main(String[] args) throws Exception {
        System.out.println(diasSemana(0));

    }
}

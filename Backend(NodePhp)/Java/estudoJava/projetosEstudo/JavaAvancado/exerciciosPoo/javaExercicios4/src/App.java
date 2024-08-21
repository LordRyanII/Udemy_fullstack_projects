import javax.swing.JOptionPane;

class App {

    static int calculaPorcentagem(int salario, int porcentagem) {
        int Salarioatualizado = salario * porcentagem;
        int resultado = Salarioatualizado / 100;

        return resultado;
    }

    public static void main(String[] args) {
        int salario = Integer.parseInt((JOptionPane.showInputDialog(null, "Digite o seu salário")));
        int valorPorcentaagem = Integer.parseInt((JOptionPane.showInputDialog(null, "Digite o valor da porcentagem")));
        int resultado = calculaPorcentagem(salario, valorPorcentaagem);

        JOptionPane.showMessageDialog(null, "Resultado " + resultado);
    }
}

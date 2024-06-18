import javax.swing.JOptionPane;

public class stringForNumber {

    public static void main(String[] args) {
        // Teste com app, JOptionPane => Exibe uma tela
        String valor1 = JOptionPane.showInputDialog("Digite o valor, primeiro número");
        String valor2 = JOptionPane.showInputDialog("Digite o segundo valor, segundo número");

        Double resultado1 = Double.parseDouble(valor1);
        Double resultado2 = Double.parseDouble(valor2);

        System.out.println(resultado1 + resultado2);
    }

}

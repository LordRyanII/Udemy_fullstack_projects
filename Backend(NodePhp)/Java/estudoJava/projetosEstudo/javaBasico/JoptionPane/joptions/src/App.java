import javax.swing.JOptionPane;

class App {
    public static void main(String[] args) throws Exception {
        // Mostrar mensagem para o usuário, via janela
        JOptionPane.showMessageDialog(null, "Olá, mundo!", "Informação", JOptionPane.INFORMATION_MESSAGE); // Mensagem simples

        String janela = JOptionPane.showInputDialog("Digite o primeiro valor");// Entrada de dados1

        String janela2 = JOptionPane.showInputDialog("Digite o segundo valor");// Entrada de dados2

    }
}

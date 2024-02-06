public class App {
    int preco = 400;
    int compra = 150;

    void comprar() {

        if (compra <= preco) {
            System.out.println("Compra realizada com sucesso!");
            preco -= compra;
            System.out.println("O novo preço do produto é de: " + preco);
        } else {
            System.out.println("Insuficiente dinheiro para a compra.");
        }
    }

    public void main(String[] args) {
        App app = new App();
        app.comprar();
    }
}

//Construtores em java

class Carro {
    private String marca;
    private String modelo;
    private int ano;

    Carro(String marca, String modelo, int ano) { //Contrutor da classe Carro
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    String getCarro() {
        return "Marca: " + this.marca + " Modelo: " + this.modelo + " Ano: " + this.ano;
    }
}

class App {
    public static void main(String[] args) throws Exception {
        Carro carro = new Carro("Chevrolet", "Chevette", 1973); //Chamada do construtor da Classe Carro, para acessar os métodos da classe, a tipagem é a classe
        String dadosCarro = carro.getCarro();

        System.out.println(dadosCarro);
    }
}

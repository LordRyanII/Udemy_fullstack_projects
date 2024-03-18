class objetoPessoa {
    public String Nome;
    public int Idade;

    objetoPessoa(String nome, int idade) {
        this.Nome = nome;
        this.Idade = idade;

    }

    String retornaNomeIdade() {
        return "Nome: " + this.Nome + ", Idade: " + this.Idade;
    }

}

class Principal {
    public static void main(String[] args) {
        objetoPessoa pessoa1 = new objetoPessoa("Ryan", 22);

        String dadosPessoa = pessoa1.retornaNomeIdade();
        
        System.out.println(dadosPessoa);
        System.out.println("------------------------");
        System.out.println(pessoa1.Nome);
        System.out.println("------------------------");
        System.out.println(pessoa1.Idade);
    }
}

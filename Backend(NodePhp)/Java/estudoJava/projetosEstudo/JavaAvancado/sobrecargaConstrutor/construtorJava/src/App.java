class Usuario {
    // Propriedades/atributos
    String email;
    String senha;
    int numero;

    // construtor 1 para casos com email e senha
    Usuario(String email, String senha) {
        this.email = email;
        this.senha = senha;
    }

    // construtor 2 para casos com números
    Usuario(int telefone) {
        this.numero = telefone;
    }

    // métodos
    void verificaUserLogado() {
        System.out.println("Verificando...");
        if (email != null && senha != null) {
            System.out.println("Usuário logado com sucesso!");
        } else {
            System.out.println("Usuários não logados");
        }

    }

}

class App {
    public static void main(String[] args) throws Exception {
        Usuario user = new Usuario("teste@123.com", "123456");
        user.verificaUserLogado();

    }
}

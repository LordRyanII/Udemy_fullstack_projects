// Exemplos literais de objeto

let usuario = {
  nome: "João",
  idade: 30,
  email: "joao@example.com"
};

//console.log(usuario);

let usuario2 = {
    nome: "João",
    idade: 30,
    email: "joao@example.com",
    saudacao: function() {
      console.log("Olá, meu nome é " + this.nome + " e eu tenho " + this.idade + " anos.");
    }
};
console.log(usuario2.nome); //Saída: 'João'
console.log(usuario2.idade);//Saída: 30
console.log(usuario2.email);//Saída: 'Joao@example.com'

usuario2.saudacao();
  
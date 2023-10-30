function semRetorno(): void {
  console.log("Sem retorno");
} // Exemplo de função sem retorno, eu não preciso usar o return;

function lista(...dados: string[]): void {
  const listaItens = dados.join(" ");

  console.log(listaItens);
}

lista("arroz", "Feijão", "Leite");

const pessoas = {
  nome: "Renata",
  sobrenome: "Alves",
  exibirNome(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

pessoas.exibirNome();

export default { pessoas };

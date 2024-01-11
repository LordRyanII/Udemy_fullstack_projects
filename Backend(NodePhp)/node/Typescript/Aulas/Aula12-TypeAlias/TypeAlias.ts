type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  sexo?: string;
};

type corRGB = "Vermelho" | "Azul" | "Verde";

type corPreferida = corRGB | "Preto";

const pessoa1: Pessoa = {
  nome: "Ryan",
  idade: 22,
};

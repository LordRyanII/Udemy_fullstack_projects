const acharItemArray = (dado) => {
  const array = ["cachorro", "gato", "bola", "macaco", "testes"];
  let resultado;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === dado) {
      return resultado = "Achado " + array[i];
    }
    return resultado = "Não encontrado" + dado;
  }
  return resultado;
};

console.log(acharItemArray("cachorro"));

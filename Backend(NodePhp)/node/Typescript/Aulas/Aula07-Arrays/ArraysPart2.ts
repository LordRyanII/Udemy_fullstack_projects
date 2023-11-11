const nomeContrario = (...nomes: string[]): string => {
  const dadosFormatado: string[] = nomes.map((nome) => {
    const nomeString: string = nome.toString();
    return nomeString.toLocaleLowerCase().split("").reverse().join("");
  });

  return dadosFormatado.toString();
};

console.log(nomeContrario("Ryan", "Renata")); //Retorno: nayr,ataner

console.log('Ryan'.split("").reverse())

const frase = "Olá, eu sou uma frase.";
const palavras = frase.split(" ");
console.log(palavras); // output: ["Olá,", "eu", "sou", "uma", "frase."]


// Para "Destranformar", desfazer ou transformar o array em string novamente usamos a função join()

const string = palavras.join(" ");
console.log(string)
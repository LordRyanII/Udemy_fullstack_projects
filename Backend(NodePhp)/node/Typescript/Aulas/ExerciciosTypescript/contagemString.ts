//Crie uma função que conte o número de caracteres em uma string.

const contador = (palavra: string):string => {
    return `A palavra ${palavra} contém: ${palavra.length} caracteres`;
};

const nome: string = 'Ryan';

console.log(contador(nome));
console.log(contador('Adalberto'));

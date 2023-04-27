let myArray = [1, 2, 3];
//  indice aonde será adicionado, número de elementos a serem removidos, elementos que serão adicionados
                myArray.splice(1, 0, 4);
console.log(myArray); 

// Entendendo: foi adicionado no indice 0 um novo elemento (4);
// No segundo argumento como esta 0 nenhum elemento foi removido;


myArray.splice(1, 2, 4);
console.log(myArray); 

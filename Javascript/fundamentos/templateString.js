//Formatando_strings

let Name = 'R3nata'
const sobrenome = 'Alves Da Luz'

console.log(Name.charAt(0)) //mostra as letras do nome atribuído na variavel
console.log(Name.charAt(1))
console.log(Name.charAt(2))
console.log(Name.charAt(3))
console.log(Name.charAt(4))
console.log(Name.charAt(5))

console.log(Name.replace(1, 'e').toString())
console.log(`Nome completo: ${Name} ` + sobrenome)

//Chamando funções:

const up = Texto => Texto.toUpperCase() //Transforma strings em maiúsculas

console.log(`Ei... ${up('cuidado!')} ataque de elfos á frente!!`) //A saída será a palavra cuidado, em CUIDADO. 


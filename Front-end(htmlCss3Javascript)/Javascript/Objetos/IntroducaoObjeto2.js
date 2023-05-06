// Exemplos de objeto não literais:

function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

const Carros = new Carro('Chevrolett', 'Chevette', 1980)

console.log(Carros.ano)
 
  
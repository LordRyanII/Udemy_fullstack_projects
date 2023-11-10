const objetoA : {
    Nome: string;
    data: number;
    sexo?: string
} = {
    Nome: "Juan",
    data: 6,
}

const Nome = objetoA.sexo = 'Masculino';

console.log(Nome)


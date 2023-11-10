let objetoA: {
    Nome: string;
    data: number;
    sexo?: string;
    [key: string]: unknown;
} = {
    Nome: '',
    data: 0,
};

objetoA.sexo = 'Masculino';
objetoA.Nome = 'Dagoberto';
objetoA.data = 15,
objetoA.sobrenome = 'Irinei'

console.log(objetoA);

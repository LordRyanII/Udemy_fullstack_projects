//Filtre os irmãos que são os com que contém o sobrenome "Oliveira Mendes";
//Filtre os Pais, que são os que contém os sobrenomes diferentes dos irmãos;
//Adicione um id, de pais e filhos

const parentes = [
    {nome: 'Ricardo', sobrenome: 'Mendes', idade: 55},
    {nome: 'Maria', sobrenome: 'Oliveira Bahls', idade: 52},
    {nome: 'Roberta', sobrenome: 'Oliveira Mendes', idade: 55},
    {nome: 'Carlos Eduardo', sobrenome: 'Oliveira Mendes', idade: 55},
    
];

const Irmaos = parentes.filter(obj => {
    const sobrenomes = obj.sobrenome === 'Oliveira Mendes';

    return sobrenomes
});

//console.log(Irmaos) //Retorna os irmãos

const Pais = parentes.filter(obj => {
    const casal = obj.sobrenome != 'Oliveira Mendes';

    return casal
});

//console.log(Pais);

const IdentificaçaoHerarquia = parentes.map((obj, indice ) => {
    const indiceHerarquia = {...obj};

    if(obj.sobrenome !== 'Oliveira Mendes'){
        indiceHerarquia.id = 'Pais';

        return indiceHerarquia; 

    } else if (obj.sobrenome === 'Oliveira Mendes') {

        indiceHerarquia.id = 'irmao'
    }

    return indiceHerarquia
    
});

console.log(IdentificaçaoHerarquia)
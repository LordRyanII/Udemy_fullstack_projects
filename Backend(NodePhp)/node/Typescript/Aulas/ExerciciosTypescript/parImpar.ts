function parImpar (...numeros: number[]) {
    const numerosFormatados: string[] = numeros.map(obj => {
        if(obj % 2 === 0){
            return `${obj} é Par`;
        } else {
            return `${obj} é Impar`;
        }
    });

    return console.log(numerosFormatados);
};

parImpar(10,50,6526,78,73,25,77);
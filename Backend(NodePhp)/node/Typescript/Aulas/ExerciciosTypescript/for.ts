const retornaArray = (...dados: string[]):void => {
    const nomes:string[] = dados;
    const tamanhoArray: number = dados.length;
    const estado = 'true'
    let inicio = 0
    while(estado){
        if(inicio < tamanhoArray){
            const tempInicio = inicio;
            setTimeout(() => { // Adicionei esta linha
                console.log(`Nome ${tempInicio}: ${nomes[inicio++]}`);
            }, 1000); // Adicionei esta linha
        };
        break;
    };
};

retornaArray('Ryan', 'Renata', 'De Paollo');
const adicionar = () => {
    const valor = Number.parseFloat(0.99);
    if(valor >= 1){
        return 'Maior'
    }else {
        return 'Menor'
    }
}

console.log(adicionar())
// Metódo Getter/ Setter

const Sequencia = {
    _valor : 1, //Convenção
    get valor(){
        return this._valor ++
    },
    set valor(valor){
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(Sequencia.valor = 1000)
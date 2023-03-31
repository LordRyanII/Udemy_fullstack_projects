// Abstraindo conteúdos de uma tv
//Para deixarmos a nossa class privada precisamos usar os metódos getter e setter
class Tv{
    constructor(){
        this._relacaoCanais = Array(2,4,5,7,10)
        this._canalAtivo = 5
        this._volume = 5
    } get canalAtivo(){
        return this._canalAtivo
    }
}

/*
    Getter e setter

São atributos que são usados para não permitir que façamos um reset nas nossas configurações;
Isso significa que as variavéis acima (this._volume) terão os seus valores fixos;
Seria o equivalente a uma constante (const)
*/
let tv = new Tv()
console.log(tv.canalAtivo)
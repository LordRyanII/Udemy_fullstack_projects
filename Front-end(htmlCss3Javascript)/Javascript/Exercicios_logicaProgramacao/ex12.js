function adicionaPizzas(...Tipopizza) {
    const arrayPizzas = Tipopizza;

    return arrayPizzas
};

const listaPizzas = adicionaPizzas('margarita', ' calabresa')

function exibePizza() {
    console.log(`Total de pizzas: ${listaPizzas.length}`);
    console.log(`Confirma esses sabores: ${listaPizzas}?`)
}

exibePizza();

function confirmaPizzas(decisao) {
    const input = decisao.toUpperCase();
    const regex = /n[aã]o/i
    if (input === 'SIM') {
        console.log(`PEDIDO CONFIRMADO: ${listaPizzas.length} pizzas, ${listaPizzas}`)
    } else if (input === 'NAO') {
        console.log("PEDIDO CANCELADO")
    }
    else {
        console.log('OPS: Erro, não entendemos o seu pedido, tente novamente')
    }
};

confirmaPizzas('nao')
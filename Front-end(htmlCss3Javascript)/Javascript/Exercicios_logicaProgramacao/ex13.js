class Pizza {
    constructor(...input) {
        this.pizza = input
    }
    exibePizzas() {
        console.log(`Total de pizzas: ${this.pizza.length}`);
        console.log(`Você escolheu essas pizzas: ${this.pizza}`);
        return this.pizza
    }
    confirmaPizzas(input) {
        const pizza = this.pizza
        const regex = /n[aã]o/i
        if (input === 'sim') {
            console.log(`PEDIDO CONFIRMADO: TOTAL: ${pizza.length} pizzas, SABORES: ${pizza}.`)
        } else if (regex.test(input) === true) {
            console.log('PEDIDO CANCELADO')
        } else {
            console.log('ERRO: Não entendemos o que você digitou')
        }
    }
}
const novoPedido = new Pizza('margarita', ' calabresa', ' mussarela');
novoPedido.exibePizzas();
novoPedido.confirmaPizzas('sim');
novoPedido.confirmaPizzas('nao');
novoPedido.confirmaPizzas('taok');
//objeto em javascript_part2

{
    const produto_1 = {}
    produto_1.produto = 'celular' //adiciona categoria no objeto com o nome produto que irá receber 'celular'
    produto_1.marca = 'Motorola' //adiciona categoria no objeto com o nome marca que irá receber 'motorola'
    produto_1.modelo = 'G6 play' //adiciona categoria no objeto com o nome modelo que irá receber 'modelo'
    produto_1['preço'] = 1500.00 //adiciona categoria no objeto com o nome preço que irá receber '1500.00'
    //produto_1[''] desse jeito não é recomendado, mas tem a mesma função
    console.log(produto_1) //exibe o resultado
}

//Outra maneira:
{
    const produto_2 = {
        produto: 'Abrigo moletom', //necessário virgula no final
        preco: 250.00
    }
    console.log(produto_2)
}

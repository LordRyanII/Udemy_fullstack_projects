const express = require('express');
const app = express();
const porta = 8000

//       Criar    Ler   Atualizar  Deletar
// CRUD => Create, Read , Update , Delete
//         POST    GET    PUT      DELETE

// exemplo de rota:
// http://meusite.com/  => GET => Entregue a página => /  => Geralmente é a home do site
// http://meusite.com/sobre  => GET => Entregue a página => /  => Faça GET na página /sobre
// http://meusite.com/contatos  => GET => Entregue a página => /  => Faça GET na página /contatos

app.get('/', (req, res) => {
    res.send(`
        <form action = "/" method="POST">
        Nome: <input type="text" name="nome">
        <button>ENVIAR</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    res.send('<h1 style="text-align: center;" >Recebi o formulário!<h1>')
})

app.get('/contatos', (req, res) => {
    res.send('<h1> Obrigado por entrar em contato conosco!</h1>')
});

app.listen(porta, () => {
    console.log(`Servidor rodando na porta:${porta}`)
    console.log(`Acesse: http://localhost:${porta}`)
});

// req => requisição => É o que vamos pedir ao servidor
// res => Resposta => É a resposta ao que foi pedido, vindo do servidor
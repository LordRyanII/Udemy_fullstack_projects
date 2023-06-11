const express = require('express');
const app = express();
const porta = 4005

app.use(express.urlencoded({extended:true})); //Para tratar o body da requisição

app.get('/', (req, res) => {
    res.send(`
        <form action = "/" method="POST">
        Nome: <input type="text" name="nome">
        <button>ENVIAR</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('<h1 style="text-align: center;" >Recebi o formulário!<h1>');
})

//                params  com ? => significa que o paramêtro é opcional
app.get('/testes/:idUsuarios?/:segundoParametroOpcional?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params)
})

app.listen(porta, () => {
    console.log(`Servidor rodando na porta:${porta}`)
    console.log(`Acesse: http://localhost:${porta}`)
});

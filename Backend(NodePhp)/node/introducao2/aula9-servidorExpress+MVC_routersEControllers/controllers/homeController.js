exports.paginaInicial = (req, res) => {
    res.send(`
    <form action = "/" method="POST">
    Nome: <input type="text" name="nome">
    <button>ENVIAR</button>
    </form>
    `)
};

exports.trataPost = (req, res) => {
    res.send(`Você fez post!`)
}
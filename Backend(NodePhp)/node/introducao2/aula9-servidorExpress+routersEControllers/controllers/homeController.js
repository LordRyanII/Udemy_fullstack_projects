exports.paginaInicial = (req, res) => {
    res.send(`
    <form action = "/" method="POST">
    Nome: <input type="text" name="nome">
    <button>ENVIAR</button>
    </form>
    `)
};
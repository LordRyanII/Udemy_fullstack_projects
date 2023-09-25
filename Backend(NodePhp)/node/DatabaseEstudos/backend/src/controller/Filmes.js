const criarFilme = require('../database/models/mongoSchemma');

exports.listaFilmes = (req, res) => {
    res.send('hello')
};


exports.criarFilmes = (req, res) => {
    const body = req.body;
    const { mongoSchemmaCriar } = criarFilme
    console.log(body);

    try {
        mongoSchemmaCriar(body);
        return res.status(200).json({
            message: 'filme criado com sucesso'
        })
    } catch (error) {
        res.status(400).json({
            message: 'erro ao cadastrar filme',
            error
        })
    }
}
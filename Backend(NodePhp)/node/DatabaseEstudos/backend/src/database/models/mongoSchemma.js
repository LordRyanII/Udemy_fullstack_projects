const mongo = require('mongodb');

const mongoSchemmaListar = () => {
    //...
};

const mongoSchemmaCriar = (body) => {
    db.Filmes.insertOne({
        nome: body.nome,
        classificacao: body.classificacao,
        genero: body.genero,
        anoLancamento: body.anoLancamento
    });

};


module.exports = { mongoSchemmaCriar, mongoSchemmaListar }
const HomeModel = require('../models/homeModel.js');

HomeModel.create({
  titulo: 'Um titulo de Testes',
  descricao: 'Descrição de testes',
})
  .then(dados => {
    console.log(`Dados criados com sucesso! ${JSON.stringify(dados)}`);
  })
  .catch(error => {
    console.log(`Erro ao criar dados! ${JSON.stringify(error)}` + error)
  });

exports.paginaInicial = (req, res) => {
  res.render('index');
};

exports.trataPost = (req, res) => { //Trata as requisições do tipo POST
  res.send(req.body);
};

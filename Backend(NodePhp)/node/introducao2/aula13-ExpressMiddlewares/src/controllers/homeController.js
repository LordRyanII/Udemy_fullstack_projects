exports.paginaInicial = (req, res, next) => {
  console.log('Estou respondendo o cliente');
  res.render('index');
  console.log(`PaginaInicial: Olha o que há na ${req.session.nome}`)
  next()
};

exports.trataPost = (req, res) => { //Trata as requisições do tipo POST
  res.send(req.body);
  console.log(req.body)
  return;
};

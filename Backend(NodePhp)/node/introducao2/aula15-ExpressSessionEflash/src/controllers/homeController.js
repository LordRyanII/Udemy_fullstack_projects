exports.paginaInicial = (req, res) => {
  console.log(req.flash())
  res.render('index');
  return;
};

exports.trataPost = (req, res) => { //Trata as requisições do tipo POST
  res.send(req.body);
};

const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  produto: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  }
});

const Produto = mongoose.model('Produto', produtoSchema);

module.exports = Produto;

const mongoose = require('mongoose');

const InstituicaoSchema = mongoose.Schema({
  nomeFantasia: String,
  cnpj: String,
  campus: String
})

module.exports = mongoose.model('Instituicao', InstituicaoSchema);
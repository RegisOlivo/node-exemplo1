const mongoose = require('mongoose');

const PessoaSchema = mongoose.Schema({
  nome: String,
  sobrenome: String,
  email: String,
  cpf: String,
  login: String,
  password: String
})

module.exports = mongoose.model('Pessoa', PessoaSchema);
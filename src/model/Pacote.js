const mongoose = require('mongoose');

const PacoteSchema = mongoose.Schema({
  descricao: String,
  valor: Number,
  atividades:[{
    ref: 'Atividade',
    type: mongoose.Schema.Types.ObjectId
  }]
});
module.exports = mongoose.model('Pacote', PacoteSchema);
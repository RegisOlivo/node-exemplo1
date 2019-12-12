const mongoose = require('mongoose');

const PacoteSchema = mongoose.Schema({
    descricao: String,
    valor: Number,
    atividade: [{
        ref: 'Atividade',
        type: mongoose.Schema.Types.ObjectId
    }],
    evento: {
      ref: 'Evento',
      type: mongoose.Schema.Types.ObjectId
  }
});
module.exports = mongoose.model('Pacote', PacoteSchema);
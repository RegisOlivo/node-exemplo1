const mongoose = require('mongoose');

const EventoSchema = mongoose.Schema({
  dataInicio: Date,
  dataTermino: Date,
  descricao: String,
  local: String,
  instituicao: {
    ref: 'Instituicao',
    type: mongoose.Schema.Types.ObjectId
  }
});

EventoSchema.virtual('atividades', {
  ref: 'Atividade',
  localField: '_id',
  foreignField: 'evento'
});

EventoSchema.set('toJSON', {
  virtuals: true
})


module.exports = mongoose.model('Evento', EventoSchema);
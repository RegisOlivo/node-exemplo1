const mongoose = require('mongoose');

const MinistranteSchema = mongoose.Schema({
  descricao: String,
  pessoa: {
    ref: 'Pessoa',
    type: mongoose.Schema.Types.ObjectId
  }
});
module.exports = mongoose.model('Ministrante', MinistranteSchema);
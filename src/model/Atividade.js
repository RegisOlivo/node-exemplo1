const mongoose = require('mongoose');

const AtividadeSchema = mongoose.Schema({
    descricao: String,
    valor: Number,
    evento: {
        ref: 'Evento',
        type: mongoose.Schema.Types.ObjectId
    }
});
module.exports = mongoose.model('Atividade', AtividadeSchema);
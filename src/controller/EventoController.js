const Evento = require('../model/Evento');
const Atividade = require('../model/Atividade');
const Instituicao = require('../model/Instituicao')

module.exports = {
    async store(req, res) {
 
        const evento = req.body;

        console.log(evento)

        const instituicao = await Instituicao.findById(evento.instituicao);
        if (!instituicao) return res.status(400).json('Instituiçãonão encontrada');

        let eventoStore = await Evento.create(evento);

        evento.atividades.forEach(atv => {
            
            atv.evento = eventoStore._id;

            Atividade.create(atv);

            console.log(atv)
        });

        return res.json(eventoStore);
    },

    async show(req, res) {
        const { id } = req.params;
        const evento = await Evento.findById(id);
        return res.json(evento);
    },

    async index(req, res) {
        return res.json(await Evento.find().populate('instituicao').populate('atividades'));
    },

    async update(req, res) {
        
    },

    async delete(req, res) {
        
    }
}
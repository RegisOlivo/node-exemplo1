const Evento = require('../model/Evento');
const Atividade = require('../model/Atividade');

module.exports = {
    async store(req, res) {
        //const { id } = req.params;
        const atividade = req.body;

        console.log(atividade)

        const evento = await Evento.findById(atividade.evento);
        if (!evento) return res.status(400).json('Evento não foi encontrado!');

        return res.json(await Atividade.create(atividade));
    },

    async show(req, res) {
        const { id } = req.params;
        const atividade = await Atividade.findById(id);
        return res.json(atividade);
    },

    // Obter todas as atividades de um evento
    async index(req, res) {
        const { id } = req.params;

        return res.json(await Atividade.find({ evento: id }).populate('evento'));
    },

    async update(req, res) {

    },

    async delete(req, res) {

    }
}
const Evento = require('../model/Evento');
const Atividade = require('../model/Atividade');
const Pacote = require('../model/Pacote');
const Instituicao = require('../model/Instituicao')

module.exports = {
    async store(req, res) {
        const evento = req.body;
        console.log(evento)
        const instituicao = await Instituicao.findById(evento.instituicao);
        if (!instituicao) return res.status(400).json('Instituição não encontrada');
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
        const { id } = req.params;
        const { dataInicio, dataTermino, descricao, local } = req.body;
        const evento = await Evento.findById(id);
        evento.dataInicio = dataInicio;
        evento.dataTermino = dataTermino;
        evento.descricao = descricao;
        evento.local = local;
        evento.save();
        return res.json(evento);
    },

    async delete(req, res) {
        const { id } = req.params;
        const evento = await Evento.findByIdAndDelete(id);
        return res.json(evento); 
    }
}
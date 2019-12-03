const Pacote = require('../model/Evento');
const Atividade = require('../model/Atividade');

module.exports = {
    async store(req, res) {
        const { IDatividade } = req.params;
        const { descricao, valor } = req.body;
        const atividade = await Atividade.findById(IDatividade);
        if (!atividade) return res.status(403).json('Atividade não foi encontrado!');
        const pacote = await Pacote.create({ descricao, valor, atividade: IDatividade});
        return res.json(pacote);
    },

    async show(req, res) {
        const { id } = req.params;
        const pacote = await Pacote.findById(id);
        return res.json(pacote);
    },

    async index(req, res) {
        return res.json(await Pacote.find());
    },

    async update(req, res) {
        
    },

    async delete(req, res) {
        
    }
}
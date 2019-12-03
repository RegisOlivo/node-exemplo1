const Ministrante = require('../model/Ministrante');

module.exports = {
    async store(req, res) {
        const { IDpessoa } = req.params;
        const { descricao } = req.body;
        const ministrante = await Ministrante.create({ descricao, pessoa: IDpessoa });
        return res.json(ministrante);
    },

    async show(req, res) {
        const { id } = req.params;
        const ministrante = await Ministrante.findById(id);
        return res.json(ministrante);
    },

    async index(req, res) {
        return res.json(await Ministrante.find());
    },

    async update(req, res) {
    },

    async delete(req, res) {

    }
}
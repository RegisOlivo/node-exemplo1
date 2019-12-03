const Instituicao = require('../model/Instituicao');

module.exports = {
    async store(req, res) {
        const { nomeFantasia, cnpj, campus } = req.body;
        const instituicao = await Instituicao.create({ nomeFantasia, cnpj, campus });
        return res.json(instituicao);
    },

    async show(req, res) {
        const { id } = req.params;
        const instituicao = await Instituicao.findById(id);
        return res.json(instituicao);
    },

    async index(req, res) {
        return res.json(await Instituicao.find());
    },

    async update(req, res) {
        const { id } = req.params;
        const { nomeFantasia, cnpj, campus } = req.body;
        const instituicao = await Instituicao.findById(id);
        instituicao.nomeFantasia = nomeFantasia;
        instituicao.cnpj = cnpj;
        instituicao.campus = campus;
        instituicao.save();
        return res.json(instituicao);
    },

    async delete(req, res) {
        const { id } = req.params;
        const instituicao = await Instituicao.findByIdAndDelete(id);
        return res.json(instituicao);
    }
}
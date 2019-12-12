const Pessoa = require('../model/Pessoa');

module.exports = {
    async store(req, res) {
        const { nome, sobrenome, email, cpf, login, password } = req.body;
        const pessoa = await Pessoa.create({ nome, sobrenome, email, cpf, login, password });
        return res.json(pessoa);
    },

    async show(req, res) {
        const { id } = req.params;
        const pessoa = await Pessoa.findById(id);
        return res.json(pessoa);
    },

    async index(req, res) {
        return res.json(await Pessoa.find());
    },

    async update(req, res) {

    },

    async delete(req, res) {
        const { id } = req.params;
        const pessoa = await Pessoa.findByIdAndDelete(id);
        return res.json(pessoa);
    }
}
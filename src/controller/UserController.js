const User = require('../model/User');

/*
    index: Listar todos os registros
    show: Mostrar 1 registro
    store: Criar 1 registro
    update: Atualizar
    destroy: Excluir
*/
module.exports = {
    async store(req, res) {
        const json = req.body;

        let user = await User.findOne({ mail: json.mail });

        if (!user) user = await User.create(json);

        return res.json(user);
    },

    async show(req, res){
        const {userId} = req.headers;

        const user = await User.find({id: userid});
        //const user = await User.findOne({_id: userid});
        //const user = await User.findById(userid);

        return res.json(user);
    },

    async index(req, res){
        return res.json(await User.find());
    }

}
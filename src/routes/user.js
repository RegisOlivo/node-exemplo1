const express = require('express');

//colocar no inicio da pagina
const UserController = require('../controller/UserController');

const router = express.Router();
/*
router.get('/', (req, res) => {
    console.log(req.query)

    //const orderby = req.params.orderby;
    const { orderby, limit } = req.query;

    res.json([{ nome: 'Juca' }, { nome: 'Ze' }]);
    console.log("Ordenado por: " + orderby);
})
*/

router.put('/:id', (req, res) => {
    console.log("Update: " + req.params.id)

    res.json({ id: req.params.id })
})

router.get('/:userid', UserController.show);
router.get('/', UserController.index);
router.post('/', UserController.store);

/*
router.post('/', (req, res) => {
    console.log(req.body);

    res.json(req.body)

    console.log(req.body.name)
})
*/

module.exports = router;
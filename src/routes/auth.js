require('dotenv/config');
const express = require('express');
const jwt = require('jsonwebtoken');
const { Validator } = require('express-json-validator-middleware');

const validator = new Validator({allErrors: true});

const { AuthSchema } = require('../model/validationSchemas');

const router = express.Router();

router.post('/', validator.validate({body: AuthSchema}), (req, res) => {
    if (req.body.user == 'admin' && req.body.password == '1234') {
        const id = 1; //vem do banco

        let token = jwt.sign({ id }, process.env.SECRET, /*chave secreta*/ { expiresIn: 300 /*expira em 5 minutos*/ })

        return res.json({ auth: true, token: token });
    }
    return res.status(400).json({
        auth: false,
        message: "Login inválido"
    })
})

module.exports = router;
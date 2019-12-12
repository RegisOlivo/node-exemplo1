const express = require('express');
const router = express.Router();

//const userRoutes = require('./user');
//const authRoutes = require('./auth');
//const isAuthorized = require('../middlewares/auth')

router.get('/', (request, response) => {
    response.json({ message: "Teste" });
});

//router.use('/user', [isAuthorized], userRoutes);
//router.use('/auth', authRoutes);

const pessoaController = require('../controller/PessoaController');
const instituicaoController = require('../controller/InstituicaoController');
const ministranteController = require('../controller/MinistranteController');
const eventoController = require('../controller/EventoController');
const pacoteController = require('../controller/PacoteController');
const atividadeController = require('../controller/AtividadeController');

//POST
router.post('/pessoa', pessoaController.store);
router.post('/instituicao', instituicaoController.store);
router.post('/ministrante/:IDpessoa', ministranteController.store);
router.post('/evento/atividade', atividadeController.store);
router.post('/evento', eventoController.store);
router.post('/pacote/:IDatividade', pacoteController.store);

//GET (ALL)
router.get('/pessoa', pessoaController.index);
router.get('/instituicao', instituicaoController.index);
router.get('/ministrante', ministranteController.index);
router.get('/evento', eventoController.index);
router.get('/pacote', pacoteController.index);
router.get('/evento/:id/atividade', atividadeController.index);

//GET (ID)
router.get('/instituicao/:id', instituicaoController.show);
router.get('/ministrante/:id', ministranteController.show);
router.get('/pessoa/:id', pessoaController.show);
router.get('/evento/:id', eventoController.show);
router.get('/atividade/:id', atividadeController.show);
router.get('/pacote/:id', pacoteController.show);

//PUT
router.put('/instituicao/:id', instituicaoController.update);
router.put('/evento/:id', eventoController.update);

//DELETE
router.delete('/instituicao/:id', instituicaoController.delete);
router.delete('/evento/:id', eventoController.delete);
router.delete('/atividade/:id', atividadeController.delete);
router.delete('/pessoa/:id', pessoaController.delete);

module.exports = router;
const express = require('express');
const router = express.Router();
const LutadorControler = require('../controler/LutadoresControler');

//rota para inserir tarefas
router.post('/',LutadorControler.create );

//rota para atualizar Lutador
router.put('/:id', LutadorControler.update);


//rota para deletar o Lutador
router.delete('/:id', LutadorControler.delete );


//rota para visualizar todas os lutadores
router.get('/filter/all/', LutadorControler.all);

//rota para visualizar uma único lutador
router.get('/:id', LutadorControler.show);

module.exports = router;
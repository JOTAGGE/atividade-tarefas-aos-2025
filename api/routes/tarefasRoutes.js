// /api/routes/tarefasRoutes.js

const express = require('express');
const router = express.Router();
const tarefasController = require('../controllers/tarefasController');

// Mapeamento das rotas para as funções de combate do controller.

// Rota para criar um novo soldado (Tarefa).
// POST http://localhost:3000/api/tarefas
router.post('/', tarefasController.criarTarefa);

// Rota para listar todas as tropas.
// GET http://localhost:3000/api/tarefas
router.get('/', tarefasController.listarTarefas);

// Rota para obter um soldado específico pelo seu ID.
// GET http://localhost:3000/api/tarefas/:objectId
router.get('/:objectId', tarefasController.obterTarefaPorId);

// Rota para atualizar um soldado.
// PUT http://localhost:3000/api/tarefas/:objectId
router.put('/:objectId', tarefasController.atualizarTarefa);

// Rota para eliminar um soldado.
// DELETE http://localhost:3000/api/tarefas/:objectId
router.delete('/:objectId', tarefasController.deletarTarefa);

module.exports = router;
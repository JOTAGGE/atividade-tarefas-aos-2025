// /api/controllers/tarefasController.js

const Tarefa = require('../models/Tarefa');

// Nosso "banco de dados" em memória. Um quartel para nossas tropas.
const tarefas = [];

// --- FUNÇÕES DE COMBATE (LÓGICA DE NEGÓCIO) ---

// POST /tarefas
exports.criarTarefa = (req, res) => {
  try {
    const { descricao, concluida } = req.body;
    const novaTarefa = new Tarefa(descricao, concluida);
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa); // 201 Created
  } catch (error) {
    // Se o modelo Tarefa lançar um erro (ex: descrição faltando), nós o capturamos.
    res.status(400).json({ message: error.message }); // 400 Bad Request
  }
};

// GET /tarefas
exports.listarTarefas = (req, res) => {
  res.status(200).json(tarefas); // 200 OK
};

// GET /tarefas/:objectId
exports.obterTarefaPorId = (req, res) => {
  const { objectId } = req.params;
  const tarefa = tarefas.find(t => t.objectId === objectId);

  if (!tarefa) {
    return res.status(404).json({ message: 'Tarefa não encontrada.' }); // 404 Not Found
  }
  res.status(200).json(tarefa);
};

// PUT /tarefas/:objectId
exports.atualizarTarefa = (req, res) => {
  const { objectId } = req.params;
  const { descricao, concluida } = req.body;
  const tarefa = tarefas.find(t => t.objectId === objectId);

  if (!tarefa) {
    return res.status(404).json({ message: 'Tarefa não encontrada.' });
  }

  // Atualiza apenas os campos fornecidos.
  if (descricao) tarefa.descricao = descricao;
  if (concluida !== undefined) tarefa.concluida = concluida;

  res.status(200).json(tarefa);
};

// DELETE /tarefas/:objectId
exports.deletarTarefa = (req, res) => {
  const { objectId } = req.params;
  const index = tarefas.findIndex(t => t.objectId === objectId);

  if (index === -1) {
    return res.status(404).json({ message: 'Tarefa não encontrada.' });
  }

  tarefas.splice(index, 1); // Remove o soldado do quartel.
  res.status(204).send(); // 204 No Content. Missão cumprida. Silêncio no rádio.
};
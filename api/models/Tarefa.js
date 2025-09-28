// /api/models/Tarefa.js

const crypto = require('crypto');

class Tarefa {
  constructor(descricao, concluida = false) {
    // Validação: A descrição é o mínimo necessário para um soldado existir.
    if (!descricao) {
      throw new Error('A descrição da tarefa é obrigatória.');
    }

    this.objectId = crypto.randomUUID(); // Identidade única e inviolável. Gerada no nascimento.
    this.descricao = descricao;            // A missão do soldado.
    this.concluida = concluida;            // O status operacional. Padrão: vivo e pronto.
  }
}

module.exports = Tarefa;
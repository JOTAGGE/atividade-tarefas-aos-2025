// /api/app.js

require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const express = require('express');
const tarefasRoutes = require('./routes/tarefasRoutes');

// 1. Ignição do Servidor
const app = express();
const PORT = process.env.PORT || 3000; // Define a porta

// 2. Middleware Essencial
app.use(express.json());

// 3. Conectar as Linhas de Comunicação
app.use('/api/tarefas', tarefasRoutes);

// 4. Ligar o Motor e Ouvir por Ordens
app.listen(PORT, () => {
  console.log(`Servidor de combate operacional na porta ${PORT}`);
});

// 5. Exportar o Quartel-General para a Vercel
module.exports = app;
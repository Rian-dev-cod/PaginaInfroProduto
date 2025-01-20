// Importa o módulo Express
const express = require("express");
const path = require("path");

// Inicializa o aplicativo Express
const app = express();

// Define a porta para o servidor, usando variável de ambiente ou 3000 como padrão
const PORT = process.env.PORT || 3000;

// Configura a pasta pública para arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, "public")));

// Rota principal para servir o arquivo HTML
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Rota de fallback para erros 404 (Página não encontrada)
app.use((req, res) => {
    res.status(404).send("Página não encontrada");
});

// Inicia o servidor e escuta na porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const path = require("path");

const app = express();

// Habilita conexões de fora
app.use(cors());
app.use(express.json());

// --- LINHA MÁGICA: SERVIR O SITE PELO SERVIDOR ---
// Isso diz para o servidor: "Entregue o index.html, style.css e script.js quando acessarem o localhost"
app.use(express.static(__dirname));

// --- ROTA DE IMAGENS ---
app.use('/images', express.static(path.join(__dirname, 'images')));

// --- CONEXÃO COM O BANCO ---
// Se você estiver usando o db.js na pasta config, pode substituir este bloco pelo require('./config/db')
// Mas vou manter como você me enviou para garantir que funcione agora.
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "", 
    database: "koenma_sushi",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error("❌ ERRO NO BANCO:", err.message);
    } else {
        console.log("✅ BANCO CONECTADO COM SUCESSO!");
        connection.release();
    }
});

// --- ROTA DE REGISTRO ---
app.post("/registro", (req, res) => {
    const { nome, cpf, telefone, endereco, senha } = req.body;
    if (!nome || !cpf || !telefone || !endereco || !senha) {
        return res.status(400).json({ success: false, error: "Preencha todos os campos!" });
    }
    const sql = 'INSERT INTO clientes (nome, cpf, telefone, endereco, senha) VALUES (?, ?, ?, ?, ?)';
    pool.query(sql, [nome, cpf, telefone, endereco, senha], (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') return res.status(409).json({ success: false, error: "CPF já cadastrado!" });
            return res.status(500).json({ success: false, error: err.message });
        }
        res.status(201).json({ success: true, id: result.insertId, nome, message: 'Conta criada!' });
    });
});

// --- ROTA DE LOGIN ---
app.post("/login", (req, res) => {
    const { cpf, senha } = req.body;
    if (!cpf || !senha) return res.status(400).json({ success: false, error: "Informe CPF e Senha." });

    const sql = 'SELECT * FROM clientes WHERE cpf = ? AND senha = ?';
    pool.query(sql, [cpf, senha], (err, results) => {
        if (err) return res.status(500).json({ success: false, error: err.message });
        if (results.length > 0) {
            const usuario = results[0];
            delete usuario.senha; 
            res.json({ success: true, usuario: usuario });
        } else {
            res.status(401).json({ success: false, error: "CPF ou Senha incorretos." });
        }
    });
});

// --- ROTA DE PEDIDOS ---
app.post("/pedidos", (req, res) => {
    const { cliente_id, total, itens } = req.body;
    if (!cliente_id || !itens || itens.length === 0) return res.status(400).json({ success: false, error: "Carrinho vazio." });

    const sqlPedido = 'INSERT INTO pedidos (cliente_id, total) VALUES (?, ?)';
    pool.query(sqlPedido, [cliente_id, total], (err, result) => {
        if (err) return res.status(500).json({ success: false, error: "Erro ao salvar pedido" });
        
        const pedidoId = result.insertId;
        const itensValues = itens.map(item => [pedidoId, item.id, item.quantity, item.price]);
        const sqlItens = 'INSERT INTO pedido_itens (pedido_id, produto_id, quantidade, preco_unitario) VALUES ?';
        
        pool.query(sqlItens, [itensValues], (errItens) => {
            if (errItens) return res.status(500).json({ success: false, error: "Erro ao salvar itens" });
            res.status(201).json({ success: true, pedidoId: pedidoId });
        });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 SERVIDOR RODANDO! ACESSE: http://localhost:${PORT}`);
});
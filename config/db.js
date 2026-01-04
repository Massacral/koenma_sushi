const mysql = require("mysql2");

console.log("--> LENDO ARQUIVO DB.JS NOVO <--");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: undefined, // Isso garante que NENHUMA senha será enviada
    database: "koenma_sushi",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error("❌ DEU ERRO (TESTE NOVO):", err.code);
        console.error("⚠️ O erro original é: " + err.message);
    } else {
        console.log("✅ MySQL CONECTADO COM SUCESSO! (TESTE NOVO)");
        connection.release();
    }
});

module.exports = pool;
const sequelize = require("sequelize");

const DB_NAME = 'loja';
const DB_USER = 'root';
const DB_PASS = 'mysql';
const DB_CONFIG = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
}

// objeto para guaradar a conexão com o banco de dados
let db = {};

try {
    db = new sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
    console.error("Erro ao tentar uma conexão com o banco de dados");
}

async function hasConction(){
    try {
        await db.authenticate();
        console.log("Banco de dados conectado!");
    } catch (error) {
    console.error("Erro ao tentar se conectar ao banco de dados!")       ;
    }
}

Object.assign(db, {
    hasConction,
});

module.exports = db;

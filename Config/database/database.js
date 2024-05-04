const { Client } = require('pg');

const clients = new Client({
  host: 'localhost',
  database: 'teste2',
  user: 'postgres',
  password: 'root'
});

async function addTable() {

  let isDatabaseConnected = true

  try {
    await clients.connect();
    const query = `CREATE TABLE IF NOT EXISTS dados_clientes (
        ID int NOT NULL AUTO_INCREMENT
        nome VARCHAR(50) NOT NULL,
        CPF VARCHAR(14) NOT NULL UNIQUE, 
        email VARCHAR(50) NOT NULL UNIQUE,
        telefone VARCHAR(14) NOT NULL UNIQUE,
        data_De_Nascimento DATE NOT NULL,
        senha VARCHAR(25) NOT NULL
      );`

    await clients.query(query);

  }
  catch (error) {
    console.error('Erro ao adicionar tabela:', error);
    isDatabaseConnected = false;
  } finally {
    await clients.end();
  }

  return isDatabaseConnected;
}

module.exports = { addTable };

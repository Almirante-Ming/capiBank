// Todas as funções que interagem com o DB

const { Pool } = require('pg')

const clients = new Pool({
  host: 'localhost',
  port: '5432',
  database: 'clientes',
  user: 'postgres',
  password: 'root',
  max: 100
})

async function createTable() {

  let isDatabaseConnected = true

  try {

    await clients.connect()

    const query = `CREATE TABLE IF NOT EXISTS dados_clientes (
      ID serial NOT NULL PRIMARY KEY UNIQUE,
      nome VARCHAR(50) NOT NULL,
      CPF VARCHAR(14) NOT NULL UNIQUE, 
      email VARCHAR(50) NOT NULL UNIQUE,
      telefone VARCHAR(14) NOT NULL UNIQUE,
      data_nascimento DATE NOT NULL,
      senha VARCHAR(25) NOT NULL
    );`

    await clients.query(query)
  }

  catch (error) {
    console.error('Erro ao adicionar tabela:', error)
    isDatabaseConnected = false
  }

  return isDatabaseConnected
}

async function createColumn(data, custom_query) {

  var data_values = []
  var outcome = 400
  var error

  Object.keys(data).forEach((item) => {
    data_values.push(String(data[item]))
  })

  try {
    await clients.connect()
    const result = await clients.query(custom_query, data_values)
    if (result.rowCount > 0) { outcome = 200 }
  }

  catch (err) {
    console.log(err)
    error = err
  }

  finally {
    return { outcome, error }
  }

}

async function readColumn(custom_query) {

  let result

  try {
    await clients.connect();
    result = await clients.query(custom_query)
  }

  catch (err) {
    console.log(err)
  }

  finally {
    return result
  }

}

async function updateColumn(custom_query, data) {

  let outcome = 400
  let error

  try {
    await clients.connect()
    let result = await clients.query(custom_query, data)
    if (result.rowCount > 0) { outcome = 200 }
  }

  catch (err) {
    error = err
    console.log(err)
  }

  finally {
    return { outcome, error }
  }
  
}



module.exports = { createTable, createColumn, readColumn, updateColumn };

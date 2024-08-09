const express = require("express");
const mysql = require("mysql2/promise");
const app = express();
const port = 3000;

const config = {
  host: "db",
  database: "nodedb",
  user: "root",
  password: "senha",
};

app.get("/", async (req, res) => {
  const connection = await mysql.createConnection(config);

  // Criar a tabela se não existir
  await connection.execute(
    `CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL)`
  );

  const name = `User ${Math.floor(Math.random() * 1000)}`;
  await connection.execute(`INSERT INTO people(name) VALUES (?)`, [name]);
  connection.end();

  res.send(`<h1>Full Cycle Rocks!</h1><br>${name}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

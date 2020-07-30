require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const fetch = require("node-fetch");
const { Pool } = require("pg");
const index = require("./routes/index");

const pool = new Pool({
  user: "dbuser",
  host: "database.server.com",
  database: "mydb",
  password: "secretpassword",
  port: 5432,
});

index.set(app);
const port = process.env.PORT;

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  res.json({ message: error.message });
});

async function getBlocks() {
  const body = {
    jsonrpc: "2.0",
    method: "eth_getBlockByNumber",
    params: ["latest", true],
    id: "9d1b5930f82f479d89cf87310d59b51b",
  };
  const response = await fetch(
    "https://mainnet.infura.io/v3/9d1b5930f82f479d89cf87310d59b51b",
    {
      method: "post",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    }
  );
}

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

module.exports = app;

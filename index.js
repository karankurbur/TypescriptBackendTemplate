const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
const port = 3001;

const a = 4;

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/test", (req, res) => {
  res.send({ friend: 1 });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

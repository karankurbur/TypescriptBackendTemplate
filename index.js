const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const port = 3001;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/urlParam", (req, res) => {
  console.log(req.query);
  res.send(true);
});

app.post("/test", (req, res) => {
  console.log(req.query);

  res.send({ friend: 1 });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

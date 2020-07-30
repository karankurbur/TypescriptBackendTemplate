require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const index = require("./routes/index");

index.set(app);
const port = process.env.PORT;

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  res.json({ message: error.message });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

module.exports = app;

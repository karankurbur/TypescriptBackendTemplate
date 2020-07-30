module.exports.set = (app) => {
  app.get("/", (req, res) => res.send("Hello World!"));

  app.get("/urlParam", (req, res) => {
    console.log(req.query);
    res.send(true);
  });

  app.post("/test", (req, res) => {
    console.log(req.body);

    res.send({ friend: 1 });
  });
};

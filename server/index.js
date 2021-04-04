const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db"); // Connection to database
const { cows } = require("./controllers");

const app = express();
const port = 3000;

app.use(require("./middleware/logger"));
app.use(express.json());
app.use(express.static("./client/dist"));

app
  .route("/api/cows")
  .get((req, res) => {
    cows
      .getAll()
      .then((cowData) => res.status(200).send(cowData))
      .catch((err) => res.status(500).send(err));
  })
  .post((req, res) => {
    cows
      .post(req.body)
      .then((msg) => res.status(201).send(msg))
      .catch((err) => res.status(400).send(err));
  });

app
  .route("/api/cows/:id")
  .delete((req, res) => {
    cows
      .delete(req.params.id)
      .then((msg) => res.status(200).send(msg))
      .catch((err) => res.status(400).send("Could not delete cow"));
  })
  .put((req, res) => {
    cows
      .put(req.params.id, req.body)
      .then((msg) => res.status(200).end())
      .catch((err) => res.status(400).send(err));
  });

app.listen(port, () => console.log(`Listening on port ${port}!`));

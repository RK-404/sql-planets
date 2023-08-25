// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send(
    `<h1>Planets of our Solar System</h1>
    <a href="/planets">Clich here to see the Planets Data</a>`
  );
});

// APPS ROUTES
const planetsController = require("./controllers/planetsController");
app.use("/planets", planetsController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;

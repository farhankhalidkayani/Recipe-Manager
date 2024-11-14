const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const http = require("http");
const connect = require("./src/DB/connect.js");
const recipeRoutes = require("./src/Routes/recipe.routes.js");
const app = express();

dotenv.config();
connect();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello" });
});
app.use("/api/recipes", recipeRoutes);

module.exports = (req, res) => {
  app(req, res);
};

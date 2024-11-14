const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const connect = require("../src/DB/connect.js");
const recipeRoutes = require("../src/Routes/recipe.routes.js");
const serverless = require("serverless-http");

dotenv.config();
connect();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/recipes", recipeRoutes);

module.exports = app;
module.exports.handler = serverless(app);

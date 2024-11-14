const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const connect = require("../src/DB/connect.js");
const recipeRoutes = require("../src/Routes/recipe.routes.js");

dotenv.config();
connect();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Listening at PORT ${process.env.PORT}`);
});

app.use("/recipes", recipeRoutes);

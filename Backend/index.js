const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
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
app.use("/recipes", recipeRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listening at PORT ${process.env.PORT}`);
});

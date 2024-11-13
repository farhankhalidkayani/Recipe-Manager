const {
  getRecipe,
  getRecipes,
  addRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../Controllers/recipe.controller.js");

const express = require("express");

const router = express.Router();

router.get("/", getRecipes);
router.get("/:id", getRecipe);
router.post("/", addRecipe);
router.put("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);

module.exports = router;

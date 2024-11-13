const asyncHandler = require("express-async-handler");
const Recipe = require("../Models/recipe.model.js");

const getRecipes = asyncHandler(async (req, res) => {
  const recipes = await Recipe.find({});
  if (!recipes) {
    return res.status(404).json({ message: "No recipes in the Database" });
  }
  return res.status(200).json(recipes);
});

const getRecipe = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const recipe = await Recipe.findById(id);
  if (!recipe) {
    return res.status(404).json({ message: "No such recipe in the Database" });
  }
  return res.status(200).json(recipe);
});

const addRecipe = asyncHandler(async (req, res) => {
  const { title, ingredients, instructions, image } = req.body;
  if (!title || !ingredients || !instructions) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }
  const recipe = await Recipe.create({
    title,
    ingredients,
    instructions,
    image,
  });
  return res.status(200).json(recipe);
});

const updateRecipe = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const recipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true });

  return res.status(200).json(recipe);
});

const deleteRecipe = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const recipe = await Recipe.findByIdAndDelete(id);

  return res.status(200).json(recipe);
});

module.exports = {
  getRecipe,
  getRecipes,
  addRecipe,
  updateRecipe,
  deleteRecipe,
};

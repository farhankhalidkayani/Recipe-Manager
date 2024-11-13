import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRecipe() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Create the recipe object
    const newRecipe = {
      title,
      ingredients,
      instructions,
      image: image
        ? image
        : "https://www.shutterstock.com/image-illustration/coming-soon-concept-image-text-600nw-2402613961.jpg",
    };

    try {
      // Post the new recipe data to the backend
      const response = await fetch("/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      });

      if (response.ok) {
        // Redirect to homepage or recipe detail page after adding
        navigate("/recipes/");
      } else {
        console.log("Error adding recipe.");
      }
    } catch (error) {
      console.log("Error while adding recipe:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-center mb-6">
          Add a Recipe
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-lg font-medium">
              Recipe Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Ingredients Input */}
          <div>
            <label htmlFor="ingredients" className="block text-lg font-medium">
              Ingredients
            </label>
            <textarea
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              required
              rows="4"
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Instructions Input */}
          <div>
            <label htmlFor="instructions" className="block text-lg font-medium">
              Instructions
            </label>
            <textarea
              id="instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              required
              rows="4"
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Image URL Input */}
          <div>
            <label htmlFor="image" className="block text-lg font-medium">
              Image URL (Optional)
            </label>
            <input
              type="url"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
            >
              {loading ? "Adding..." : "Add Recipe"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRecipe;

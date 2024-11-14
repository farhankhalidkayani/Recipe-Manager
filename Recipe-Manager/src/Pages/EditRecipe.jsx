import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";

function EditRecipe() {
  const { id } = useParams(); // Get the recipe ID from the URL
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState(null);

  // Fetch recipe data for the given ID
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}recipes/${id}`
        );
        const data = await response.json();
        setRecipe(data);
        setTitle(data.title);
        setIngredients(data.ingredients);
        setInstructions(data.instructions);
        setImage(data.image || "");
      } catch (err) {
        console.log("Error fetching recipe:", err);
      }
    };

    fetchRecipe();
  }, [id]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedRecipe = {
      title,
      ingredients,
      instructions,
      image: image
        ? image
        : "https://www.shutterstock.com/image-illustration/coming-soon-concept-image-text-600nw-2402613961.jpg",
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}recipes/${id}`,
        {
          method: "PUT", // PUT request for updating
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedRecipe),
        }
      );

      if (response.ok) {
        navigate(`/recipes/${id}`); // Redirect to the recipe detail page after successful update
      } else {
        console.log("Error updating recipe.");
      }
    } catch (err) {
      console.log("Error while updating recipe:", err);
    } finally {
      setLoading(false);
    }
  };

  if (!recipe) {
    return <Loader />; // Show loading state if recipe data isn't loaded yet
  }

  return (
    <div className="bg-gray-900 text-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-center mb-6">Edit Recipe</h2>
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
              {loading ? "Updating..." : "Update Recipe"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditRecipe;

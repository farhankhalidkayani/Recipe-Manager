import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Recipepage() {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the recipe ID from URL params
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          `https://recipe-manager-55zj.vercel.app/recipes/${id}`
        );
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.log("Error fetching recipe:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleDelete = async () => {
    try {
      await fetch(`https://recipe-manager-55zj.vercel.app/recipes/${id}`, {
        method: "DELETE",
      });
      navigate("/recipes/");
    } catch (error) {
      console.log("Error deleting recipe:", error);
    }
  };

  const handleEdit = () => {
    navigate(`/recipes/${id}/edit`); // Redirect to the edit page
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-900 text-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
        <h2 className="text-4xl font-semibold mb-4">{recipe.title}</h2>
        <p className="text-gray-400 text-lg mb-4">{recipe.ingredients}</p>
        <p className="text-gray-300 text-lg mb-6">{recipe.instructions}</p>
        <div className="flex justify-between">
          <button
            onClick={handleEdit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Recipepage;

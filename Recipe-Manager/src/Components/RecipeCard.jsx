// RecipeCard.js
import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ id, title, ingredients, image }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-xs mx-auto">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-100 mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{ingredients}</p>
        <button className="bg-gray-700 hover:bg-gray-600 text-gray-100 py-2 px-4 rounded">
          <Link to={`/recipes/${id}`}> View Recipe</Link>
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;

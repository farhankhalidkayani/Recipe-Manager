// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-700 text-gray-200 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Recipe App</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/recipes" className="hover:text-gray-400">
              Recipes
            </Link>
          </li>
          <li>
            <Link to="/recipes/add" className="hover:text-gray-400">
              Add Recipe
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

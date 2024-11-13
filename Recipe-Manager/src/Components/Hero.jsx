// Hero.js
import React from "react";

function Hero() {
  return (
    <div className="bg-gray-800 text-gray-100 flex flex-col items-center py-16 px-4">
      <img
        src="https://t4.ftcdn.net/jpg/04/43/94/31/360_F_443943188_0YO3b8vHxQfOncdqmR5O2x1xZ4f44lA1.jpg"
        alt="Hero"
        className="w-40 h-40 object-cover rounded-full mb-6 shadow-lg"
      />
      <h1 className="text-4xl font-semibold text-center">
        Welcome to Recipe App
      </h1>
      <p className="text-gray-400 text-center mt-4 max-w-lg">
        Discover and share amazing recipes from around the world. Create, edit,
        and manage your own recipes in one place!
      </p>
    </div>
  );
}

export default Hero;

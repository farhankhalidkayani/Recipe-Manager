// NotFound.js
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-200">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! Page not found.</p>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        The page you are looking for doesn’t exist or has been moved. Please
        check the URL or go back to the homepage.
      </p>
      <Link
        to="/"
        className="bg-gray-800 hover:bg-gray-700 text-gray-100 py-2 px-4 rounded"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default NotFound;

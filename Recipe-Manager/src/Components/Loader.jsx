// src/components/Loader.jsx

import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;

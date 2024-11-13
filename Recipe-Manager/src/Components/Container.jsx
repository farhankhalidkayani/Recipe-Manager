// Container.js
import React from "react";

function Container({ title, children }) {
  return (
    <div className="bg-gray-900 text-gray-100 py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-10">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center mx-auto max-w-7xl">
        {children}
      </div>
    </div>
  );
}

export default Container;

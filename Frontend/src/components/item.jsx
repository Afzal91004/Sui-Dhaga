import React, { useState } from "react";
import clothingItems from "../services/api";

const ProductCard = ({ item }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(item.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(item.colors[0]);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + item.images.length) % item.images.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % item.images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-6 bg-gradient-to-r from-black/50 to-black border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white">
        {item.name}
      </h2>
      <div className="relative mb-4 w-56 h-56">
        <img
          src={item.images[currentIndex]}
          alt={item.name}
          className="w-full h-full object-cover rounded-lg shadow-md transition-opacity duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-between">
          <button
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 focus:outline-none"
            onClick={handlePrevClick}
          >
            <svg
              className="w-4 h-4 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 focus:outline-none"
            onClick={handleNextClick}
          >
            <svg
              className="w-4 h-4 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <p className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
        Price:{" "}
        <span className="font-bold text-gray-600 dark:text-gray-400">
          ₹{item.price}
        </span>
      </p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Description: {item.description}
      </p>
      <p className="mb-2 text-gray-600 dark:text-gray-300">
        Material:{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {item.material}
        </span>
      </p>
      <p className="mb-2 text-gray-600 dark:text-gray-300">
        Stock:{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {item.stock}
        </span>
      </p>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Available Sizes:
        </h3>
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {item.sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Available Colors:
        </h3>
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {item.colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        className="mt-4 px-6 py-2 text-white bg-gray-600 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

const Item = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {clothingItems.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Item;

import React from "react";

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const CategorySidebar = () => (
  <aside className="hidden md:flex flex-col gap-2 bg-white rounded-lg shadow p-4 min-w-[220px]">
    {categories.map((cat, idx) => (
      <button
        key={idx}
        className="text-left text-gray-700 hover:text-red-500 transition-colors font-medium px-2 py-1 rounded hover:bg-gray-100"
      >
        {cat}
      </button>
    ))}
  </aside>
);

export default CategorySidebar; 
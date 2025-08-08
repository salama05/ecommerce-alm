import React from "react";
import ProductCard from "./ProductCard";

const ProductSection = ({ items, header, title }) => {
  return (
    <div className="border-slate-950 border">
      {header && (
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block w-2 h-8 bg-color-button-2 rounded-sm"></span>
          <h2 className="font-inter text-3xl ov-800:text-4xl font-semibold text-gray-900">{header}</h2>
        </div>
      )}

      <h4 className="sr-only">{title}</h4>
      <div className="grid grid-cols-4 gap-6 sm-1000:grid-cols-3 sm-800:grid-cols-2 sm-640:grid-cols-1">
        {items.map((item) => {
          if (item.category === title) {
            return <ProductCard key={item.id} item={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default ProductSection;

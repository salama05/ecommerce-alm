import React from "react";
import ProductCard from "./ProductCard";

const ProductSection = ({ items, header, title }) => {
  return (
    <div className="border-slate-950 border">
      <h2>{header}</h2>

      <h4>{title}</h4>
      <div className="grid grid-cols-4 gap-6">
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

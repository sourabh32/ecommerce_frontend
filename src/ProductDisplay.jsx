import React from "react";
import ProductCard from "./ProductCard";
import Paginantion from "./components/Paginantion";

const ProductDisplay = ({ products,page,onPageChange }) => {
  console.log(products);
  return (
    <div>
        {products.length === 0 && <p className="my-5 text-center w-full">No Products to show!</p>}
      <div className="grid grid-cols-1 my-5 px-1 sm:px-5 gap-4 sm:grid-cols-3">
      
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
      <Paginantion page={page} onPageChange={onPageChange} />
    </div>
  );
};

export default ProductDisplay;

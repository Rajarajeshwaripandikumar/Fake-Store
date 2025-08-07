import React from "react";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto mb-2" />
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-sm text-gray-700">${product.price}</p>
          <button
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-7-- transform hover:scale-105 transition-transform duration-300"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
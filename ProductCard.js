import React from "react";

const ProductCard = ({ product, addToCart, cartItems = [] }) => {
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleAdd = () => {
    if (isInCart) {
      alert("Item already added to the cart");
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="w-full sm:w-[30%] lg:w-[23%] border p-4 rounded shadow-md hover:shadow-lg transition">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain mb-2"
      />

      {/* Product Title */}
      <h2 className="text-sm font-semibold mb-1 line-clamp-2">
        {product.title}
      </h2>

      {/* Product Price */}
      <p className="text-green-700 font-bold mb-2">
        ${product.price}
      </p>

      {/* Add to Cart Button */}
      <button
        onClick={handleAdd}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard

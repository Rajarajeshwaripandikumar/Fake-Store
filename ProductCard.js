import React, { useState } from "react";

const ProductCard = ({ product, addToCart, cartItems }) => {
  const [message, setMessage] = useState("");

  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleAdd = () => {
    setMessage("Add to Cart clicked");
    if (isInCart) {
      setMessage("Item already in cart");
    } else {
      addToCart(product);
      setMessage("Item added to cart");
    }

    // Clear the message after 2 seconds
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="w-full sm:w-[30%] lg:w-[23%] border p-4 rounded shadow-md hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain mb-2"
      />
      <h2 className="text-sm font-semibold mb-1 line-clamp-2">{product.title}</h2>
      <p className="text-green-700 font-bold mb-2">${product.price}</p>
      
      <button
        onClick={handleAdd}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>

      {/* Success/Error Message */}
      {message && (
        <p className="text-sm text-blue-600 mt-2">{message}</p>
      )}
    </div>
  );
};

export default ProductCard;

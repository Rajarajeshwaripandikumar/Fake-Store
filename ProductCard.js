import React from "react";
import PropTypes from "prop-types";

const ProductCard = ({ product, addToCart, cartItems = [] }) => {
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleAdd = () => {
    if (isInCart) {
      alert("Item already added to the cart");
    } else {
      addToCart(product);
      alert("Item added to the cart");
    }
  };

  return (
    <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] border rounded-xl p-4 shadow-md bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-md font-semibold line-clamp-2 mb-2">
        {product.title}
      </h3>
      <p className="text-gray-600 font-bold mb-2">${product.price}</p>
      <button
        onClick={handleAdd}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  cartItems: PropTypes.array,
};

export default ProductCard;
KJHH

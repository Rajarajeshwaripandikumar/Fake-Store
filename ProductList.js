import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard"; // import the card
import axios from "axios";

const ProductList = ({ addToCart, cartItems }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          cartItems={cartItems}
        />
      ))}
    </div>
  );
};

export default ProductList;

import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";
import Navbar from "./components/Navbar";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch product data from Fake Store API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Add to cart with alert
  const addToCart = (product) => {
    const alreadyInCart = cartItems.find((item) => item.id === product.id);
    if (alreadyInCart) {
      alert("Item already added to the cart");
    } else {
      setCartItems([...cartItems, product]);

      // Show alert after state update using setTimeout
      setTimeout(() => {
        alert("Item added to the cart");
      }, 0);
    }
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={cartItems.length} openCart={() => setIsModalOpen(true)} />

      <div className="p-4">
        <ProductList products={products} addToCart={addToCart} cartItems={cartItems} />
        
        <CartModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
        />
      </div>
    </div>
  );
};

export default App;

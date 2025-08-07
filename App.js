import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";
import Navbar from "./components/Navbar";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const alreadyInCart = cartItems.find((item) => item.id === product.id);
    if (alreadyInCart) {
      alert("Item already added to the cart");
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={cartItems.length} openCart={() => setIsModalOpen(true)} />
      <div className="p-4">
        <ProductList products={products} addToCart={addToCart} />
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
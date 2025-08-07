import React from "react";

const CartModal = ({ isOpen, setIsOpen, cartItems, removeFromCart }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded w-96 max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Cart Items</h2>
        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-2 border-b pb-2">
              <div>
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          ))
        )}
        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 bg-gray-300 px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
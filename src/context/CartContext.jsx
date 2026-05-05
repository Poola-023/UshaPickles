import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
const clearCart = () => {
  setCartItems([]); // Reset the cart to an empty array
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add Item Logic
  const addToCart = (product, weight, price) => {
    setCartItems((prev) => {
      const existing = prev.find(item => item.id === product.id && item.weight === weight);
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.weight === weight) 
          ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, weight, price, quantity: 1 }];
    });
  };

  // 1. DELETE LOGIC: Removes item by unique ID + Weight combo
  const removeFromCart = (id, weight) => {
    setCartItems((prev) => prev.filter((item) => !(item.id === id && item.weight === weight)));
  };

  // 2. INCREMENT/DECREMENT LOGIC: Updates quantity with a minimum of 1
  const updateQuantity = (id, weight, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.weight === weight
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
  <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, subtotal }}>
    {children}
  </CartContext.Provider>
);
};

export const useCart = () => useContext(CartContext);
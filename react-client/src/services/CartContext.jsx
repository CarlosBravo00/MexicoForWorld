import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };
  const removeItemFromCart = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    const handleCustomEvent = (e) => {
      console.log(e.detail);
      const item = e.detail;
      addItemToCart(item);
    };

    document.addEventListener("addToCart", handleCustomEvent);

    return () => {
      document.removeEventListener("addToCart", handleCustomEvent);
    };
  }, []);

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingCartItem) {
        return prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, cantidad: cartItem.cantidad + 1 }
            : cartItem
        );
      }

      return [...prevCartItems, { ...item, cantidad: 1 }];
    });
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const updateItemQuantity = (itemId, change) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId
          ? { ...item, cantidad: Math.max(1, item.cantidad + change) }
          : item
      )
    );
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );
    return totalPrice;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        updateItemQuantity,
        calculateTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

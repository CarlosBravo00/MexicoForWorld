import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../services/CartContext";
import { Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./style.css";

const CartPage = () => {
  const { cartItems, removeItemFromCart, clearCart } = useContext(CartContext);

  const handleRemoveItem = (itemId) => {
    removeItemFromCart(itemId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="cart-container">
      <Typography variant="h4" className="cart-title">
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1" className="empty-cart">
          Your cart is empty :(
        </Typography>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="item-details">
                <Typography variant="h6" className="item-title">
                  {item.nombreProducto}
                </Typography>
                <Typography variant="body2" className="item-price">
                  {item.descripcion}
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
          <div className="cart-actions">
            <Button
              variant="outlined"
              className="clear-cart-button"
              onClick={handleClearCart}
            >
              Clear Cart
            </Button>
            <Link to="/checkout">
              <Button variant="contained" className="checkout-button">
                Checkout
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

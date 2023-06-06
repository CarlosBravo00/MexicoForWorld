import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../services/CartContext";
import { Typography, Button, IconButton } from "@mui/material";
import ProductImage from "../../components/productImage";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import "./style.css";

const CartPage = () => {
  const { cartItems, removeItemFromCart, clearCart, updateItemQuantity } =
    useContext(CartContext);

  const handleRemoveItem = (itemId) => {
    removeItemFromCart(itemId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleChangeItemQuantity = (itemId, change) => {
    updateItemQuantity(itemId, change);
  };

  return (
    <div className="cart-container">
      <Typography variant="h4" className="cart-title">
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1" className="empty-cart">
          Your cart is empty, add product to proceed
        </Typography>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="item-details">
                <ProductImage product={item} className="item-image" />
                <div className="item-info">
                  <Typography variant="h6" className="item-title">
                    {item.nombreProducto}
                  </Typography>
                  <Typography variant="body2" className="item-price">
                    {item.descripcion}
                  </Typography>
                  <div className="quantity-control">
                    <IconButton
                      onClick={() =>
                        item.cantidad > 1
                          ? handleChangeItemQuantity(item.id, -1)
                          : handleRemoveItem(item.id)
                      }
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="body1">{item.cantidad}</Typography>
                    <IconButton
                      onClick={() => handleChangeItemQuantity(item.id, 1)}
                    >
                      <AddIcon />
                    </IconButton>
                  </div>
                </div>
                <Button
                  variant="outlined"
                  className="botoneliminar"
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

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../services/CartContext";
import { addOrderCall } from "../../services/apiCalls";
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

  async function handleCheckout() {
    const cantidadProductos =
      cartItems.reduce(
        (accumulator, currentObject) => accumulator + currentObject.cantidad,
        0
      ) ?? 0;
    if (cantidadProductos > 0) {
      const usuarioId = localStorage.getItem("userId");
      await addOrderCall({
        cantidadProductos,
        usuarioId,
        productos: cartItems,
      });
      alert("Orden Creada");
      handleClearCart();
    }
  }

  return (
    <div className="cart-container">
      <Typography variant="h4" className="cart-title">
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography
          variant="body1"
          className="empty-cart"
          style={{ marginTop: "20px" }}
        >
          Your cart is empty, add product to proceed
        </Typography>
      ) : (
        <div style={{ marginTop: "40px" }}>
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
                <IconButton
                  className="botoneliminar"
                  onClick={() => handleRemoveItem(item.id)}
                  style={{ color: "red" }}
                >
                  <DeleteIcon />
                </IconButton>
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
            <Button
              variant="contained"
              className="checkout-button"
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

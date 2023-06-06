import React, { useEffect, useState } from "react";
import { getUserOrders } from "../../services/apiCalls";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import ProductImage from "../../components/productImage";
import "./style.css";

const UserPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const userId = localStorage.getItem("userId");

      const response = await getUserOrders({ userId });
      console.log(response);
      setOrders(response);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  return (
    <div
      style={{
        margin: "16px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4">User Page</Typography>
      <Typography
        variant="h5"
        style={{ marginTop: "10px", marginBottom: "15px" }}
      >
        Orders
      </Typography>
      {orders &&
        orders.map((order) => (
          <div className="order-container" key={order.id}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="subtitle1">
                {order.cantidadProductos} Productos
              </Typography>
              <Typography variant="subtitle1">
                {new Date(order.fechaCreacion).toLocaleDateString("en-GB")}
              </Typography>
            </div>
            <List>
              {order.productos &&
                order.productos.map((product) => (
                  <ListItem key={product.nombreProducto}>
                    <ProductImage
                      className="orden-producto"
                      product={product}
                    ></ProductImage>
                    <ListItemText
                      primary={product.nombreProducto}
                      secondary={`Cantidad: ${product.cantidad}`}
                    />
                  </ListItem>
                ))}
            </List>
          </div>
        ))}
    </div>
  );
};

export default UserPage;

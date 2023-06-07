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

      // Sort orders by date in descending order
      const sortedOrders = response.sort((a, b) => {
        const dateA = new Date(a.fechaCreacion);
        const dateB = new Date(b.fechaCreacion);
        return dateB - dateA;
      });

      setOrders(sortedOrders);
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
                {order.cantidadProductos} Products
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ fontWeight: "bold", fontSize: "18px" }}
              >
                {new Date(order.fechaCreacion).toString().substring(0, 25)}
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
                      secondary={`Quantity: ${product.cantidad}`}
                    />
                    <p
                      style={{
                        marginTop: "5px",
                        fontSize: "15px",
                        color: "#888",
                        fontWeight: "bold",
                      }}
                    >
                      $
                      {(product.precio * product.cantidad).toLocaleString(
                        undefined,
                        {
                          minimumFractionDigits: 2,
                        }
                      )}
                    </p>
                  </ListItem>
                ))}
            </List>
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "end",
              }}
            >
              <p
                className="price-text"
                style={{
                  marginTop: "5px",
                  fontSize: "20px",
                  color: "#888",
                  fontWeight: "bold",
                }}
              >
                Total: $
                {order.total.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default UserPage;

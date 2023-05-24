import React, { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { getProductsCall } from "../../services/apiCalls";
import Product from "../../components/product";
import "./style.css";

export default function ProductList({ onLogout }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const data = await getProductsCall();
      setProducts(data);
    }

    getProducts();
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    onLogout();
  };

  return (
    <>
      <div>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "16px" }}
          onClick={handleClick}
        >
          Logout
        </Button>
      </div>

      <div style={{ margin: "16px" }}>
        <Typography variant="h4">Productos</Typography>
        {products.map((product) => (
          <Product key={product.productId} product={product} />
        ))}
      </div>
    </>
  );
}

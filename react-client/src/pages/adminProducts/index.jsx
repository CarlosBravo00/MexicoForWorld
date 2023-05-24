import React, { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { getProductsCall } from "../../services/apiCalls";
import Product from "../../components/product";
import "./style.css";

export default function AdminProductlist({ onLogout }) {
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
      <div>
        <Link to="/AddProducts">Añadir Productos</Link>
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

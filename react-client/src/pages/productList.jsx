import React, { useState, useEffect } from "react";
import { getProductsCall } from "../services/apiCalls";

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
        <button onClick={handleClick}> Logout </button>
      </div>

      <div>
        <h1>Productos</h1>
        {products.map((product) => (
          <div key={product.productoId}>
            <h3>
              {product.nombreProducto} {product.productoId}{" "}
            </h3>
            {/* Mostrar otros detalles del producto */}
          </div>
        ))}
      </div>
    </>
  );
}

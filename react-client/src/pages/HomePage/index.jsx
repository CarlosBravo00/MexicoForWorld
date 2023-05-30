import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProductsCall } from "../../services/apiCalls";
import Product from "../../components/product";
import "./style.css";

// Define el componente HomePage
function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsCall()
      .then(data => setProducts(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="home-page">
      <h1>Bienvenido a la Página Principal</h1>
      <p>En este sitio web, podrás explorar y adquirir productos de calidad hechos en México.</p>

      <h2>Productos destacados</h2>
      <div className="product-list">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <Link to="/ventas">
        <button>Ver todos los productos</button>
      </Link>

      <Link to="/login">
        <button>Iniciar sesión</button>
      </Link>
    </div>
  );
}

export default HomePage;
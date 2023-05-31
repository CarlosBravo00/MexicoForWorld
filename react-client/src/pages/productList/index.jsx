// Home.js
import React, { useState, useEffect } from "react";
import { getProductsCall, getCategoriesCall } from "../../services/apiCalls";
import Product from "../../components/product";
import Header from "../../components/header";
import "./style.css";

export default function Home({ onLogout }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      const productsData = await getProductsCall();
      const categoriesData = await getCategoriesCall();
      
      setProducts(productsData);
      setCategories(categoriesData);
    }

    fetchData();
  }, []);

  const handleClick = () => {
    onLogout();
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header categories={categories} onSearchChange={handleSearchChange} />

      <div className="products">
        <h2>Productos</h2>
        {filteredProducts.map((product) => (
          <Product key={product.productId} product={product} />
        ))}
      </div>

      <div className="logout-button">
        <button onClick={handleClick}>
          Logout
        </button>
      </div>
    </div>
  );
}

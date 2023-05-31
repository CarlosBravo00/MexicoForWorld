import React, { useState, useEffect } from "react";
import { getProductsCall, getCategoriesCall } from "../../services/apiCalls";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Carousel from "../../components/carrusel";
import "./style.css";

export default function Home({ onLogout }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const productsData = await getProductsCall();
        const categoriesData = await getCategoriesCall();
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <Header categories={categories} />

      <Carousel products={products} />

      <Footer />
    </div>
  );
}

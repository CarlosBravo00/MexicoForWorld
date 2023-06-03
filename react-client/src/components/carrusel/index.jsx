import React, { useState, useEffect } from "react";
import { getProductsByCategory } from "../../services/apiCalls";
import "./style.css";

const Carousel = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchProductsByCategory("Café");
  }, []);

  const fetchProductsByCategory = async (category) => {
    try {
      const productsData = await getProductsByCategory(category);
      setProducts(productsData);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [products]);

  return (
    <div className="carousel">
      {products.length > 0 &&
        products.map((product, index) => (
          <img
            key={product.id}
            src={product.imageUrl}
            alt={product.name}
            className={index === currentIndex ? "active" : ""}
          />
        ))}
    </div>
  );
};

export default Carousel;

import React, { useState, useEffect, useContext } from "react";
import {
  getProductsCall,
  getCategoriesCall,
  getProductsByCategory,
} from "../../services/apiCalls";
import { Select, MenuItem, Typography } from "@mui/material";
import { CartContext } from "../../services/CartContext";
import Footer from "../../components/footer";
import { SnackbarContext } from "../../services/snackbarContext";
import Product from "../../components/product";
import "./style.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const { addItemToCart } = useContext(CartContext);
  const showSnackbar = useContext(SnackbarContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const categoriesData = await getCategoriesCall();
        setCategories(categoriesData);
        if (selectedCategory) {
          const productsData = await getProductsByCategory(selectedCategory);
          setProducts(productsData);
        } else {
          const productsData = await getProductsCall();
          setProducts(productsData);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    fetchData();
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleAddToCart = (product) => {
    const productWithQuantity = { ...product, cantidad: 1 };
    addItemToCart(productWithQuantity);
    showSnackbar("Product added to cart");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 30px",
        }}
      >
        <Typography variant="h4" className="title-text">
          Proud Mexican Products!
        </Typography>
        <div
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography style={{ whiteSpace: "nowrap" }}>
            Location of Origin
          </Typography>
          <Select
            className="select-category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <MenuItem value="">All</MenuItem>
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.nombreCategoria}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

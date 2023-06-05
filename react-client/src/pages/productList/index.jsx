import React, { useState, useEffect } from "react";
import { getProductsCall, getCategoriesCall } from "../../services/apiCalls";
import { Select, MenuItem } from "@mui/material";
import Footer from "../../components/footer";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Product from "../../components/product";
import "./style.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const categoriesData = await getCategoriesCall();
        setCategories(categoriesData);
        if (selectedCategory) {
          const productsData = await getProductsCall(selectedCategory);
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
    const event = new CustomEvent("addToCart", { detail: product });
    document.dispatchEvent(event);

    setSnackbarMessage("Product added to cart");
    setIsSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <div>
      <Select
        className="select-category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <MenuItem value="">All</MenuItem>
        {categories.map((category) => (
          <MenuItem value={category}>{category}</MenuItem>
        ))}
      </Select>
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
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={1000}
        onClose={handleCloseSnackbar}
        style={{ top: "5%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <MuiAlert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

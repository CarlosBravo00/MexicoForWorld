import React, { useState, useEffect } from "react";
import { getProductsCall, getCategoriesCall } from "../../services/apiCalls";
import Footer from "../../components/footer";
import Carousel from "../../components/carrusel";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Product from "../../components/product";
import "./style.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

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
      <Carousel products={products} />
      <div className="product-list">
        {products.map((product) => (
          <Product
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
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

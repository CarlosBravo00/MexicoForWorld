import React, { useState, useEffect, useContext } from "react";
import { getProductById } from "../../services/apiCalls";
import { useParams } from "react-router-dom";
import { CartContext } from "../../services/CartContext";
import { SnackbarContext } from "../../services/snackbarContext";
import mapaMexico from "../../images/mapaMexico.webp";
import ProductImage from "../../components/productImage";

import "./style.css";

const ProductPage = () => {
  const { id } = useParams();
  const { addItemToCart } = useContext(CartContext);
  const showSnackbar = useContext(SnackbarContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const productData = await getProductById(id);
        setProduct(productData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    fetchData();
  }, [id]);

  const handleAddToCart = (product) => {
    const productWithQuantity = { ...product, cantidad: 1 };
    showSnackbar("Product added to cart");
    addItemToCart(productWithQuantity);
  };

  if (product) {
    return (
      <div className="product-page">
        <div className="product-image">
          <ProductImage product={product} />
        </div>
        <div className="product-details">
          <h1>{product.nombreProducto}</h1>
          <p>{product.descripcion}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          <img src={mapaMexico} alt="mapa" className="map-container"></img>
        </div>
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
};

export default ProductPage;

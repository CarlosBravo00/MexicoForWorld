import React from "react";
import { useNavigate } from "react-router-dom";
import ProductImage from "../productImage";
import "./style.css";

export default function Product(props) {
  const { product, handleAddToCart } = props;
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/product/${product.id}`);
  }

  return (
    <div className="product" key={product.id}>
      <h3 onClick={handleClick} style={{ cursor: "pointer" }}>
        {product.nombreProducto}
      </h3>
      <ProductImage
        product={product}
        style={{ cursor: "pointer" }}
        onClick={handleClick}
      />

      <p onClick={handleClick} style={{ cursor: "pointer" }}>
        {product.descripcion}
      </p>
      <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

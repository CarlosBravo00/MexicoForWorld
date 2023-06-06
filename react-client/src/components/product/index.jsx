import React from "react";
import ProductImage from "../productImage";
import "./style.css";

export default function Product(props) {
  const { product, handleAddToCart } = props;

  return (
    <div className="product" key={product.id}>
      <ProductImage product={product} />
      <h3>{product.nombreProducto}</h3>
      <p>{product.descripcion}</p>
      <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

import React from "react";
import "./style.css";

export default function Product(props) {
  const { product } = props;
  const { productId, nombreProducto, descripcion } = product;
  return (
    <div key={productId}>
      <h3 className="field">{nombreProducto}</h3>
      <h5 className="field">{productId}</h5>
      <h4 className="field">{descripcion}</h4>
      {/* Mostrar otros detalles del producto */}
    </div>
  );
}

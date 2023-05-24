import React from "react";

export default function Product(props) {
  const { nombreProducto, productId } = props;
  return (
    <div key={productId}>
      <h3>
        {nombreProducto} {productId}
      </h3>
      {/* Mostrar otros detalles del producto */}
    </div>
  );
}

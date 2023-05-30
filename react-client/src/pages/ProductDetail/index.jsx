import React from 'react';

function ProductDetail({ product, onClose }) {
  return (
    <div className="product-detail-modal">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
}

export default ProductDetail;
import React, { useState, useEffect } from 'react';
import ProductDetail from "../../pages/ProductDetail"; // Asegúrate de tener este componente

function SalesPage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('/api/products') // Asegúrate de reemplazar esto con la URL de tu API
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error:', error));
  }, []);

  function handleProductClick(product) {
    setSelectedProduct(product);
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Página de ventas</h1>
      
      <input
        type="text"
        placeholder="Buscar producto..."
        onChange={e => setSearchTerm(e.target.value)}
      />

      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} onClick={() => handleProductClick(product)}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <img src={product.image} alt={product.name} />
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default SalesPage;

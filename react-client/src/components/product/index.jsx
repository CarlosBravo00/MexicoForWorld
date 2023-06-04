import React, { useState } from "react";
import "./style.css";

export default function Product(props) {
  const { product, handleAddToCart } = props;
  const [imageUrl, setImageUrl] = useState(null);

  React.useEffect(() => {
    const fetchImage = async () => {
      try {
        const image = await import(`../../images/${product.imagenId}`);
        setImageUrl(image.default);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    fetchImage();
  }, [product]);
  return (
    <div className="product" key={product.productId}>
      <img src={imageUrl} alt={product.nombreProducto} />
      <h3>{product.nombreProducto}</h3>
      <p>{product.descripcion}</p>
      <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

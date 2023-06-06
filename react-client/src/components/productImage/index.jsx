import React, { useState, useEffect } from "react";

export default function ProductImage(props) {
  const { product } = props;
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
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
  return <img src={imageUrl} alt={product.nombreProducto} {...props} />;
}

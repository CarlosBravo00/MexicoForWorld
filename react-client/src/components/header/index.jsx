import React from 'react';
import './style.css';

const Header = () => {
  return (
    <div className="header">
      <div className="top-section">
        <div className="logo">
          <img src="logo192.png" alt="Logo" />
        </div>
        <div className="company-name">
          Mexico For The World
        </div>
        <div className="menu">
          <img src="heart.png" alt="Favoritos" />
          <img src="cart.png" alt="Carrito" />
          <img src="user.png" alt="Usuario" />
        </div>
      </div>
      <div className="bottom-section">
        <div className="nav-links">
          <a href="#">Productos</a>
          <a href="#">Nosotros</a>
          <a href="#">Destacados</a>
          <a href="#">Promociones</a>
          <a href="#">Hombre</a>
        </div>
        <div className="search-bar-container">
          <input type="text" className="search-bar" placeholder="Buscar..." />
        </div>
      </div>
    </div>
  );
}

export default Header;



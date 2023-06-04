import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../services/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./style.css";

const Header = (props) => {
  const history = useNavigate();

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const handleUserClick = (event) => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    if (props.onLogout) {
      props.onLogout();
    }
  };

  const handleCloseUserMenu = () => {
    setIsUserMenuOpen(false);
  };

  const handleCartClick = () => {
    history("/cart");
  };

  return (
    <div className="header">
      <div className="top-section">
        <div className="logo">
          <img src="logo192.png" alt="Logo" />
        </div>
        <div className="company-name">Mexico For The World</div>
        <div className="menu">
          <div className="cart-menu" onClick={handleCartClick}>
            <ShoppingCartIcon className="cart-icon" />
            <span className="cart-item-count">{cartItems.length ?? 0}</span>
          </div>
          <AccountCircleIcon className="user-icon" onClick={handleUserClick} />
        </div>
        <Menu
          anchorEl={isUserMenuOpen}
          open={Boolean(isUserMenuOpen)}
          onClose={handleCloseUserMenu}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>Settings</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
      <div className="bottom-section">
        <div className="nav-links">
          <Link to="/">Productos</Link>
          <Link to="/about">Nosotros</Link>
          <Link to="/featured">Destacados</Link>
          <Link to="/promotions">Promociones</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

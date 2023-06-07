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

  return (
    <div className="header">
      <div className="top-section">
        <div className="logo" onClick={() => history("/")}>
          <img src="logo192.png" alt="Logo" />
        </div>
        <div className="company-name" onClick={() => history("/")}>
          Mexico For The World
        </div>
        <div className="menu">
          <div className="cart-menu" onClick={() => history("/cart")}>
            <ShoppingCartIcon className="cart-icon" />
            <span className="cart-item-count">
              {cartItems.reduce(
                (accumulator, currentObject) =>
                  accumulator + currentObject.cantidad,
                0
              ) ?? 0}
            </span>
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
          <MenuItem onClick={() => history("/profile")}>Profile</MenuItem>
          <MenuItem onClick={() => history("/settings")}>Settings</MenuItem>
          <MenuItem
            onClick={() => {
              history("/");
              handleLogout();
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </div>
      <div className="bottom-section">
        <div className="nav-links">
          <Link to="/">Products</Link>
          <Link to="/about">About Us</Link>
          <Link to="/featured">Featured</Link>
          <Link to="/promotions">Promotions</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

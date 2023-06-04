import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import ProductList from "./pages/productList";
import AdminProductlist from "./pages/adminProducts";
import AddProducts from "./pages/addProducts";
import UserRegister from "./pages/userRegister";
import ShoppingCart from "./pages/shoppingCart";
import Header from "./components/header";
import { CartProvider } from "./services/CartContext";
import { LoginCall, AdminLoginCall } from "./services/apiCalls";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") === "true"
  );

  const handleLogin = async (username, password) => {
    try {
      const data = await LoginCall({ username, password });
      if (data.success) {
        // El inicio de sesión fue exitoso
        // Realizar acciones adicionales, como guardar el token de autenticación en el estado
        console.log("Inicio de sesión exitoso");
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
      } else {
        // El inicio de sesión falló
        // Realizar acciones adicionales, como mostrar un mensaje de error al usuario
        console.log("Error al iniciar sesión");
      }
    } catch (error) {
      // Ocurrió un error en la solicitud
      console.log("Error en la solicitud:", error);
    }

    try {
      const data = await AdminLoginCall({ username, password });

      if (data.success) {
        console.log("Inicio de sesión exitoso");
        setIsAdmin(true);
        localStorage.setItem("isAdmin", "true");
      }
    } catch (error) {
      console.log("Error en la solicitud:", error);
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setIsLoggedIn(false);
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("isLoggedIn");
  };

  let routeElement;
  if (isLoggedIn && isAdmin) {
    routeElement = <AdminProductlist onLogout={handleLogout} />;
  } else if (isLoggedIn && !isAdmin) {
    routeElement = <ProductList />;
  } else {
    routeElement = <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <CartProvider>
        {isLoggedIn && !isAdmin ? <Header onLogout={handleLogout} /> : null}
        <Routes>
          <Route path="/" element={routeElement} />
          <Route
            path="/AddProducts"
            element={<AddProducts onLogout={handleLogout} />}
          />
          <Route path="/RegistrarUsuarios" element={<UserRegister />} />
          <Route path="/Cart" element={<ShoppingCart />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

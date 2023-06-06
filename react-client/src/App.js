import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import ProductList from "./pages/productList";
import AdminProductlist from "./pages/adminProducts";
import UserRegister from "./pages/userRegister";
import ShoppingCart from "./pages/shoppingCart";
import Checkout from "./pages/checkout";
import WorkInProgressPage from "./pages/workInProgress";
import NotFoundPage from "./pages/notFound";
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
        localStorage.setItem("userId", data.userId);
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
    localStorage.removeItem("userId");
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
          <Route path="/register" element={<UserRegister />} />
          {isLoggedIn ? (
            <>
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<WorkInProgressPage />} />
              <Route path="/featured" element={<WorkInProgressPage />} />
              <Route path="/promotions" element={<WorkInProgressPage />} />
              <Route path="/settings" element={<WorkInProgressPage />} />
              <Route path="/profile" element={<WorkInProgressPage />} />
            </>
          ) : null}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

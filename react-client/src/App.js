import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import ProductList from "./pages/productList";
import AdminProductlist from "./pages/adminProducts";
import AddProducts from "./pages/addProducts";
import UserRegister from "./pages/userRegister";
import { LoginCall, AdminLoginCall } from "./services/apiCalls";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = async (username, password) => {
    try {
      const data = await LoginCall({ username, password });
      if (data.success) {
        // El inicio de sesión fue exitoso
        // Realizar acciones adicionales, como guardar el token de autenticación en el estado
        console.log("Inicio de sesión exitoso");
        setIsLoggedIn(true);
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
        // El inicio de sesión fue exitoso
        // Realizar acciones adicionales, como guardar el token de autenticación en el estado
        console.log("Inicio de sesión exitoso");
        setIsAdmin(true);
      } else {
        // El inicio de sesión falló
        // Realizar acciones adicionales, como mostrar un mensaje de error al usuario
      }
    } catch (error) {
      // Ocurrió un error en la solicitud
      console.log("Error en la solicitud:", error);
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setIsLoggedIn(false);
  };

  let routeElement;
  if (isLoggedIn && isAdmin) {
    routeElement = <AdminProductlist onLogout={handleLogout} />;
  } else if (isLoggedIn && !isAdmin) {
    routeElement = <ProductList onLogout={handleLogout} />;
  } else {
    routeElement = <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={routeElement} />
        <Route
          path="/AddProducts"
          element={<AddProducts onLogout={handleLogout} />}
        />
        <Route path="/RegistrarUsuarios" element={<UserRegister />} />
      </Routes>
    </Router>
  );
}

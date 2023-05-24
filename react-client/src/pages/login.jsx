import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Inicio({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Invocar la función onLogin pasando los datos de inicio de sesión
    onLogin(username, password);
  };

  return (
    <div>
      <h1>Página de inicio</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Iniciar sesión</button>
      </form>
      <div>
        <Link to="/RegistrarUsuarios"> Registro </Link>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./style.css"; // Import the external CSS file

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="container">
      <div className="left-section">
        <img src="logo192.png" alt="Login" className="login-image" />
      </div>
      <div className="right-section">
        <Typography variant="h4" align="center" gutterBottom className="heading">
          Página de inicio
        </Typography>
        <form onSubmit={handleSubmit} className="form">
          <TextField
            fullWidth
            type="text"
            label="Nombre de usuario"
            variant="outlined"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            margin="normal"
            className="text-input"
          />
          <TextField
            fullWidth
            type="password"
            label="Contraseña"
            variant="outlined"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            margin="normal"
            className="text-input"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{ marginTop: "1rem" }}
            className="submit-button"
          >
            Iniciar sesión
          </Button>
        </form>
        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          <Link to="/register">Registro</Link>
        </div>
      </div>
    </div>
  );
}

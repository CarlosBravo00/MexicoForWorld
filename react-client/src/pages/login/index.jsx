import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./style.css"; // Import the external CSS file

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Invoke the onLogin function passing the login data
    onLogin(username, password);
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: 40}}>
      <Typography
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
        className="heading"
      >
        Página de inicio
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          type="text"
          label="Nombre de usuario"
          variant="outlined"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          margin="normal"
          className="text-input" // Add custom CSS class
        />
        <TextField
          fullWidth
          type="password"
          label="Contraseña"
          variant="outlined"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          margin="normal"
          className="text-input" // Add custom CSS class
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          sx={{ marginTop: "1rem" }}
          className="submit-button" // Add custom CSS class
        >
          Iniciar sesión
        </Button>
      </form>
      <div style={{ marginTop: "1rem", textAlign: "center" }}>
        <Link to="/Register"> Registro </Link>
      </div>
    </Container>
  );
}

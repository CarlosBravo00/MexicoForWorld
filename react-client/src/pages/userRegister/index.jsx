import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userRegisterCall } from "../../services/apiCalls";
import "./style.css";

export default function UserRegister() {
  const history = useNavigate();

  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [FullName, setFullName] = useState("");

  const onRegister = async (UserName, FullName, Email, Password) => {
    try {
      const data = await userRegisterCall({
        userName: UserName,
        fullName: FullName,
        email: Email,
        password: Password,
      });
      console.log(data);

      if (data.affectedRows) {
        history("/");
        alert("Usuario creado");
      } else {
        console.log("Error al crear usuario");
      }
    } catch (error) {
      console.log("Error en la solicitud:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onRegister(UserName, FullName, Email, Password);
    // Invocar la función onLogin pasando los datos de inicio de sesión
  };

  return (
    <div className="container">
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={UserName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Nombre Completo"
          value={FullName}
          onChange={(event) => setFullName(event.target.value)}
        />

        <input
          type="text"
          placeholder="Correo electronico"
          value={Email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={Password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          style={{ width: "400px", boxSizing: "content-box" }}
          type="submit"
        >
          Registrarse
        </button>
      </form>

      <div className="link">
        <Link to="/"> Iniciar Sesión </Link>
      </div>
    </div>
  );
}

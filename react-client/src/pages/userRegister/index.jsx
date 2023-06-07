import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userRegisterCall } from "../../services/apiCalls";
import { SnackbarContext } from "../../services/snackbarContext";
import "./style.css";

export default function UserRegister() {
  const history = useNavigate();

  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [FullName, setFullName] = useState("");

  const showSnackbar = useContext(SnackbarContext);

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
        showSnackbar("Usuario Creado");
        history("/");
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
    <>
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={UserName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <input
            type="text"
            placeholder="Full Name"
            value={FullName}
            onChange={(event) => setFullName(event.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={Email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={Password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            style={{
              width: "105%",
              alignSelf: "start",
            }}
            type="submit"
          >
            Register
          </button>
        </form>

        <div className="link">
          <Link to="/">Sign In</Link>
        </div>
      </div>
    </>
  );
}

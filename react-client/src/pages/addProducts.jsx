import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProductCall } from "../services/apiCalls";

export default function AddProducts({ onLogout }) {
  const [nombreProducto, setNombreProducto] = useState("");
  const [categoriaId, setCategoriaId] = useState("");

  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    onLogout();
    navigate("/");
  };

  const handleAddP = async (nombreProducto, categoriaId) => {
    try {
      const data = await addProductCall({ nombreProducto, categoriaId });

      if (data.success) {
        // El inicio de sesión fue exitoso
        // Realizar acciones adicionales, como guardar el token de autenticación en el estado
        console.log("Producto agregado");
      } else {
        // Realizar acciones adicionales, como mostrar un mensaje de error al usuario
        console.log("Error al agregar producto");
      }
    } catch (error) {
      // Ocurrió un error en la solicitud
      console.log("Error en la solicitud:", error);
    }
  };

  const handleSubmitt = (event) => {
    event.preventDefault();
    handleAddP(nombreProducto, categoriaId);
  };

  return (
    <>
      <div>
        <button onClick={handleClick}> Logout </button>
      </div>

      <div>
        <h1>Añadir Products</h1>
        <form onSubmit={handleSubmitt}>
          <input
            type="text"
            placeholder="Producto"
            value={nombreProducto}
            onChange={(event) => setNombreProducto(event.target.value)}
          />
          <input
            type="int"
            placeholder="Id categoria"
            value={categoriaId}
            onChange={(event) => setCategoriaId(event.target.value)}
          />
          <button type="submit">Añadir </button>
        </form>
      </div>
    </>
  );
}

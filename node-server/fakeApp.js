const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Read mock data

// USUARIOS

// Ruta para crear un usuario
app.post("/usuarios", async (req, res) => {
  const usuario = req.body;
  console.log("Added", usuario);
  res.send("Success");
});

//PRODUCTOS

// Ruta para obtener todos los productos
app.get("/producto", (req, res) => {
  fs.readFile("./mockData/products.json", "utf8", (err, data) => {
    try {
      const jsonObject = JSON.parse(data);
      res.send(jsonObject);
      // Now you can work with the jsonObject as an object
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  });
});

// Ruta para crear un producto
app.post("/producto", (req, res) => {
  const producto = req.body;
  console.log("Added", producto);
  res.send("Success");
});

//Inicio de sesión

// Ruta para la autenticación
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("Login", username, password);
  res.status(200).json({ success: true, message: "Inicio de sesión exitoso" });
});

// Ruta para la autenticación
app.post("/loginAdmin", (req, res) => {
  const { username, password } = req.body;
  console.log("Login", username, password);
  res.status(200).json({ success: false, message: "Inicio de sesión exitoso" });
});

// Inicialización del servidor
app.listen(5000, () => console.log("Servidor iniciado en el puerto 5000"));

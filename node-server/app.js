const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const bodyParser = require("body-parser");
const { executeQuery } = require("./db");
const bcrypt = require("bcrypt");

app.use(morgan("dev"));
app.use(cors());
// Configuración del body-parser para poder recibir datos en el body de las peticiones
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// USUARIOS

// Ruta para obtener todos los usuarios
app.get("/usuarios", (req, res) => {
  executeQuery("SELECT * FROM usuarios", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Ruta para obtener un usuario por id
app.get("/usuarios/:id", (req, res) => {
  const id = req.params.id;
  executeQuery(`SELECT * FROM usuarios WHERE id=${id}`, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Ruta para crear un usuario
app.post("/usuarios", async (req, res) => {
  const usuario = req.body;

  try {
    const hashedpassword = await bcrypt.hash(usuario.password, 10);
    executeQuery(
      `INSERT INTO usuarios (userName, fullName, email, password) VALUES ('${usuario.userName}', '${usuario.fullName}', '${usuario.email}', '${hashedpassword}')`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Error al generar el hash de la contraseña" });
  }
});

// Ruta para actualizar un usuario
app.put("/usuarios/:id", (req, res) => {
  const id = req.params.id;
  const usuario = req.body;
  console.log(req.body);
  executeQuery(
    `UPDATE usuarios SET userName='${usuario.userName}', fullName='${usuario.fullName}', email='${usuario.email}', password='${usuario.password}' WHERE id=${id}`,
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

// Ruta para eliminar un usuario
app.delete("/usuarios/:id", (req, res) => {
  const id = req.params.id;
  executeQuery(`DELETE FROM usuarios WHERE id=${id}`, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//PRODUCTOS

// Ruta para obtener todos los productos
app.get("/producto", (req, res) => {
  executeQuery("SELECT * FROM producto", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Ruta para obtener un producto por id
app.get("/producto/:id", (req, res) => {
  const id = req.params.id;
  executeQuery(
    `SELECT * FROM producto WHERE productoId=${id}`,
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

// Ruta para crear un producto
app.post("/producto", (req, res) => {
  const producto = req.body;
  executeQuery(
    `INSERT INTO producto (nombreProducto, categoriaId) VALUES ('${producto.nombreProducto}', '${producto.categoriaId}')`,
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

// Ruta para actualizar un producto
app.put("/producto/:id", (req, res) => {
  const id = req.params.id;
  const producto = req.body;
  console.log(req.body);
  executeQuery(
    `UPDATE producto SET nombreProducto='${producto.nombreProducto}', categoriaId='${producto.categoriaId}' WHERE productoId=${id}`,
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

// Ruta para eliminar un producto
app.delete("/producto/:id", (req, res) => {
  const id = req.params.id;
  executeQuery(`DELETE FROM producto WHERE productoId=${id}`, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//Categoria

// Ruta para obtener todos las categorias
app.get("/categoria", (req, res) => {
  executeQuery("SELECT * FROM categoria", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Ruta para obtener una categoria por id
app.get("/categoria/:id", (req, res) => {
  const id = req.params.id;
  executeQuery(`SELECT * FROM categoria WHERE id=${id}`, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Ruta para crear una categoria
app.post("/categoria", (req, res) => {
  const categoria = req.body;
  executeQuery(
    `INSERT INTO categoria (nombreCategoria) VALUES ('${categoria.nombreCategoria}')`,
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

// Ruta para actualizar una categoria
app.put("/categoria/:id", (req, res) => {
  const id = req.params.id;
  const categoria = req.body;
  console.log(req.body);
  executeQuery(
    `UPDATE categoria SET nombreCategoria='${categoria.nombreCategoria}' WHERE categoriaId=${id}`,
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

// Ruta para eliminar una categoria
app.delete("/categoria/:id", (req, res) => {
  const id = req.params.id;
  executeQuery(
    `DELETE FROM categoria WHERE categoriaId=${id}`,
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

//Ordenes

// Ruta para obtener todos las ordenes
app.get("/ordenes", (req, res) => {
  executeQuery("SELECT * FROM ordenes", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Ruta para obtener una orden por id
app.get("/ordenes/:id", (req, res) => {
  const id = req.params.id;
  executeQuery(`SELECT * FROM ordenes WHERE ordenId=${id}`, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Ruta para crear una orden
app.post("/ordenes", (req, res) => {
  const orden = req.body;
  const today = new Date().toISOString();
  executeQuery(
    `INSERT INTO ordenes (fechaCreacion, cantidadProductos, usuarioId) VALUES ('${today}', '${orden.cantidadProductos}', '${orden.usuarioId}')`,
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

// Ruta para actualizar una orden
app.put("/ordenes/:id", (req, res) => {
  const id = req.params.id;
  const orden = req.body;
  console.log(req.body);
  executeQuery(
    `UPDATE ordenes SET fechaCreacion='${orden.fechaCreacion}', cantidadProductos='${orden.cantidadProductos}', usuarioId='${orden.usuarioId}' WHERE ordenId=${id}`,
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

// Ruta para eliminar una orden
app.delete("/ordenes/:id", (req, res) => {
  const id = req.params.id;
  executeQuery(`DELETE FROM ordenes WHERE ordenId=${id}`, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//Inicio de sesión

// Ruta para la autenticación
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar el usuario en la base de datos por su nombre de usuario
    executeQuery(
      `SELECT * FROM usuarios WHERE userName = '${username}'`,
      async (err, result) => {
        if (err) throw err;

        // Verificar si se encontró el usuario
        if (result.length > 0) {
          const user = result[0];

          // Verificar la contraseña hasheada
          const match = await bcrypt.compare(password, user.password);

          if (match) {
            // Las contraseñas coinciden, el inicio de sesión es exitoso
            res
              .status(200)
              .json({
                success: true,
                message: "Inicio de sesión exitoso",
                userId: user.id,
              });
          } else {
            // Las contraseñas no coinciden
            res
              .status(401)
              .json({ success: false, message: "Credenciales inválidas" });
          }
        } else {
          // No se encontró el usuario
          res
            .status(401)
            .json({ success: false, message: "Credenciales inválidas" });
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

// Ruta para la autenticación
app.post("/loginAdmin", (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar el usuario en la base de datos por su nombre de usuario
    executeQuery(
      `SELECT * FROM usuarios WHERE userName = '${username}' AND ID = 1`,
      async (err, result) => {
        if (err) throw err;

        // Verificar si se encontró el usuario
        if (result.length > 0) {
          const user = result[0];

          // Verificar la contraseña hasheada
          const match = await bcrypt.compare(password, user.password);

          if (match) {
            // Las contraseñas coinciden, el inicio de sesión es exitoso
            res
              .status(200)
              .json({ success: true, message: "Inicio de sesión exitoso" });
          } else {
            // Las contraseñas no coinciden
            res
              .status(401)
              .json({ success: false, message: "Credenciales inválidas" });
          }
        } else {
          // No se encontró el usuario
          res
            .status(401)
            .json({ success: false, message: "Credenciales inválidas" });
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

// Inicialización del servidor
app.listen(5000, () => console.log("Servidor iniciado en el puerto 5000"));

const { connection, executeQuery } = require("./db");
const fs = require("fs");
const bcrypt = require("bcrypt");

async function addUsers() {
  async function hashPassword(password) {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  const jsonData = fs.readFileSync("./mockData/users.json");
  const users = JSON.parse(jsonData);

  const insertUserQuery =
    "INSERT INTO usuarios (username, fullName, email, password) VALUES ?";
  const userValues = await Promise.all(
    users.map(async (user) => [
      user.username,
      user.fullName,
      user.email,
      await hashPassword(user.password),
    ])
  );
  await executeQuery(insertUserQuery, [userValues]);
  console.log("Users Added");
}

async function addProducts() {
  const jsonData = fs.readFileSync("./mockData/products.json");
  const productos = JSON.parse(jsonData);

  const insertProductoQuery =
    "INSERT INTO producto (nombreProducto, descripcion, imagenId, categoriaId) VALUES ?";
  const productoValues = productos.map((producto) => [
    producto.nombreProducto,
    producto.descripcion,
    producto.imagenId,
    producto.categoriaId,
  ]);
  await executeQuery(insertProductoQuery, [productoValues]);
  console.log("Products Added");
}

async function addCategories() {
  const jsonData = fs.readFileSync("./mockData/categories.json");
  const categorias = JSON.parse(jsonData);

  const insertProductoQuery =
    "INSERT INTO categoria (nombreCategoria) VALUES ?";
  const categoriaValues = categorias.map((categoria) => [
    categoria.nombreCategoria,
  ]);
  await executeQuery(insertProductoQuery, [categoriaValues]);
  console.log("Categories Added");
}

async function resetDb() {
  try {
    // Read the SQL script from a file
    const sqlFilePath = "reset.sql";
    const sqlScript = fs.readFileSync(sqlFilePath, "utf-8");

    await executeQuery(sqlScript);
    console.log("SQL script executed successfully");

    await addUsers();
    await addCategories();
    await addProducts();
  } catch (err) {
    console.error("Error executing query:", err);
  } finally {
    connection.end();
    console.log("Connection closed");
  }
}

resetDb();

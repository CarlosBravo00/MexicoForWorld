export async function LoginCall({ username, password }) {
  console.log(username, password);
  const response = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  return data;
}

export async function AdminLoginCall({ username, password }) {
  const response = await fetch("http://localhost:5000/loginAdmin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  return data;
}

export async function addProductCall({
  nombreProducto,
  descripcion,
  categoriaId,
  imagenId,
}) {
  const response = await fetch("http://localhost:5000/producto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombreProducto,
      descripcion,
      categoriaId,
      imagenId,
    }),
  });

  const data = await response.json();
  return data;
}

export async function userRegisterCall({
  userName,
  fullName,
  email,
  password,
}) {
  const response = await fetch("http://localhost:5000/usuarios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userName, fullName, email, password }),
  });
  const data = await response.json();
  return data;
}

export async function getProductsCall() {
  const response = await fetch("http://localhost:5000/productos");
  const data = await response.json();
  return data;
}

export async function getProductsByCategory(category) {
  try {
    const response = await fetch(`http://localhost:5000/productos/${category}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching products:", error);
    return [];
  }
}

export async function getProductById(id) {
  try {
    const response = await fetch(`http://localhost:5000/producto/${id}`);
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.log("Error fetching products:", error);
    return [];
  }
}

export async function getCategoriesCall() {
  try {
    const response = await fetch("http://localhost:5000/categoria");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching categories:", error);
    return [];
  }
}

export async function addOrderCall({
  cantidadProductos,
  usuarioId,
  productos,
  total,
}) {
  const response = await fetch("http://localhost:5000/ordenes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cantidadProductos, usuarioId, productos, total }),
  });

  const data = await response.json();

  return data;
}

export async function addCategoryCall({ nombreCategoria }) {
  const response = await fetch("http://localhost:5000/categoria", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombreCategoria }),
  });

  const data = await response.json();
  return data;
}

export async function editProduct({
  nombreProducto,
  descripcion,
  categoriaId,
  imagenId,
  productoId,
}) {
  const response = await fetch(`http://localhost:5000/producto/${productoId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombreProducto,
      descripcion,
      categoriaId,
      imagenId,
    }),
  });

  const data = await response.json();
  return data;
}

export async function deleteProductCall({ productoId }) {
  const response = await fetch(`http://localhost:5000/producto/${productoId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
}

export async function getUserOrders({ userId }) {
  try {
    const response = await fetch(
      `http://localhost:5000/usuario/ordenes/${userId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching orders:", error);
    return [];
  }
}

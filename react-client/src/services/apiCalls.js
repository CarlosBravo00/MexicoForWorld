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

export async function addProductCall({ nombreProducto, categoriaId }) {
  const response = await fetch("http://localhost:5000/producto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombreProducto, categoriaId }),
  });

  const data = await response.json();
  return data;
}

export async function userRegister({ userName, fullName, email, password }) {
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
  const response = await fetch("http://localhost:5000/producto");
  const data = await response.json();
  return data;
}

export async function getProductsByCategory(category) {
  try {
    const response = await fetch(
      `http://localhost:5000/products?categoriaId=${category}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching products:", error);
    return [];
  }
}

export async function getCategoriesCall() {
  try {
    const response = await fetch("http://localhost:5000/categories");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching categories:", error);
    return [];
  }
}

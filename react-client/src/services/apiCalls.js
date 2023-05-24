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

export async function userRegister({ UserName, FullName, Email, Password }) {
  const response = await fetch("http://localhost:5000/usuarios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ UserName, FullName, Email, Password }),
  });
  const data = await response.json();
  return data;
}

export async function getProductsCall() {
  const response = await fetch("http://localhost:5000/producto");
  const data = await response.json();
  return data;
}

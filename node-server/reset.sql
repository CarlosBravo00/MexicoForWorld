<<<<<<< HEAD
DROP TABLE IF EXISTS ordenes;
DROP TABLE IF EXISTS producto;
DROP TABLE IF EXISTS usuarios;

=======
DROP TABLE IF EXISTS ordenes_products;

DROP TABLE IF EXISTS ordenes;

DROP TABLE IF EXISTS usuarios;

DROP TABLE IF EXISTS producto;

DROP TABLE IF EXISTS categoria;
>>>>>>> 80f4d1afd4f84101741ee46e72973222bf43aa6f

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100),
    fullName VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
);

<<<<<<< HEAD

=======
CREATE TABLE categoria (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombreCategoria VARCHAR(100)
);
>>>>>>> 80f4d1afd4f84101741ee46e72973222bf43aa6f

CREATE TABLE producto (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombreProducto VARCHAR(100),
    descripcion VARCHAR(100),
    imagenId VARCHAR(100),
    categoriaId INT,
<<<<<<< HEAD
    FOREIGN KEY (categoriaId) REFERENCES categoria(id)
=======
    FOREIGN KEY (categoriaId) REFERENCES categoria (id)
>>>>>>> 80f4d1afd4f84101741ee46e72973222bf43aa6f
);

CREATE TABLE ordenes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fechaCreacion DATE,
    cantidadProductos INT,
<<<<<<< HEAD
    usuarioId INT,
    FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);
=======
    usuarioId INT
);

CREATE TABLE ordenes_products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    productoId INT,
    ordenID INT,
    cantidad INT,
    FOREIGN KEY (productoId) REFERENCES producto (id),
    FOREIGN KEY (ordenID) REFERENCES ordenes (id)
)
>>>>>>> 80f4d1afd4f84101741ee46e72973222bf43aa6f

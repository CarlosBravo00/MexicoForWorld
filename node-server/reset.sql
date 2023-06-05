DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100),
    fullName VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
);

DROP TABLE IF EXISTS producto;

CREATE TABLE producto (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombreProducto VARCHAR(100),
    descripcion VARCHAR(100),
    imagenId VARCHAR(100),
    categoriaId INT
);

DROP TABLE IF EXISTS categoria;

CREATE TABLE categoria (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombreCategoria VARCHAR(100)
);

DROP TABLE IF EXISTS ordenes;

CREATE TABLE ordenes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fechaCreacion DATE,
    cantidadProductos INT
);
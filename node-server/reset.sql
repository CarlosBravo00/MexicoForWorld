DROP TABLE IF EXISTS ordenes;
DROP TABLE IF EXISTS producto;
DROP TABLE IF EXISTS usuarios;


CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100),
    fullName VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
);



CREATE TABLE producto (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombreProducto VARCHAR(100),
    descripcion VARCHAR(100),
    imagenId VARCHAR(100),
    categoriaId INT,
    FOREIGN KEY (categoriaId) REFERENCES categoria(id)
);

CREATE TABLE ordenes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fechaCreacion DATE,
    cantidadProductos INT,
    usuarioId INT,
    FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);

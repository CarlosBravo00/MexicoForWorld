import React, { useState } from "react";
import { addProductCall, editProduct } from "../../services/apiCalls";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";

export default function AddProductDialog({
  open,
  handleClose,
  handleConfirm,
  product,
  categories,
  isEdit,
}) {
  const [nombre, setNombre] = useState(product ? product.nombreProducto : "");
  const [descripcion, setDescripcion] = useState(
    product ? product.descripcion : ""
  );
  const [categoria, setCategoria] = useState(
    product ? product.categoriaId : ""
  );
  const [imagenId, setImagenId] = useState(product ? product.imagenId : "");
  const [price, setPrice] = useState(product ? product.precio : "");

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };
  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };
  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };
  const handleImagenIdChange = (event) => {
    setImagenId(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  async function handleSaveChanges() {
    if (isEdit) {
      await editProduct({
        productoId: product.id,
        nombreProducto: nombre,
        descripcion,
        categoriaId: categoria,
        imagenId,
        precio: price,
      });
    } else {
      await addProductCall({
        nombreProducto: nombre,
        descripcion,
        categoriaId: categoria,
        imagenId,
        precio: price,
      });
    }
    await handleConfirm();
  }

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <div style={{ padding: "20px 30px 20px 30px" }}>
        <DialogTitle>
          {isEdit ? "Editar Producto" : "Añadir Nuevo Producto"}
        </DialogTitle>
        <DialogContent>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>
                    <TextField
                      size="small"
                      fullWidth
                      value={nombre}
                      onChange={handleNombreChange}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell>
                    <TextField
                      multiline
                      rows={2}
                      fullWidth
                      value={descripcion}
                      onChange={handleDescripcionChange}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell>
                    <FormControl style={{ minWidth: "100%" }}>
                      <Select
                        size="small"
                        fullWidth
                        value={categoria}
                        onChange={handleCategoriaChange}
                      >
                        {categories.map((category) => (
                          <MenuItem key={category.id} value={category.id}>
                            {category.nombreCategoria}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Image ID</TableCell>
                  <TableCell>
                    <TextField
                      size="small"
                      value={imagenId}
                      onChange={handleImagenIdChange}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Price</TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      size="small"
                      value={price}
                      onChange={handlePriceChange}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveChanges}
          >
            Add Product
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
}

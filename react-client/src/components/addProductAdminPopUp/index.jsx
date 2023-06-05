import React from "react";
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
  InputLabel,
} from "@mui/material";

export default function AddProductDialog({ open, handleClose, product, handleTableEdit, handleSaveChanges }) {
    const categories = [
      { id: 1, name: "Electronics" },
      { id: 2, name: "Clothing" },
      { id: 3, name: "Home Decor" },
    ];
  
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Añadir Nuevo Producto</DialogTitle>
        <DialogContent>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>
                    <TextField
                      value={product ? product.nombreProducto : ""}
                      onChange={(event) => handleTableEdit(event, "nombreProducto")}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Descripción</TableCell>
                  <TableCell>
                    <TextField
                      value={product ? product.descripcion : ""}
                      onChange={(event) => handleTableEdit(event, "descripcion")}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Categoría</TableCell>
                  <TableCell>
                    <FormControl style={{ minWidth: "150px" }}>
                      <InputLabel id="category-label">Categoría</InputLabel>
                      <Select
                        labelId="category-label"
                        id="category-select"
                        value={product ? product.categoria : ""}
                        onChange={(event) => handleTableEdit(event, "categoria")}
                      >
                        {categories.map((category) => (
                          <MenuItem key={category.id} value={category.id}>
                            {category.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button variant="contained" color="primary" onClick={handleSaveChanges}>
            Añadir Producto
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  

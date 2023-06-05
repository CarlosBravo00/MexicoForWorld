import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Button } from "@mui/material";

export default function EditProductDialog({ open, handleClose, product, handleTableEdit, handleSaveChanges }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Editar Producto</DialogTitle>
      <DialogContent>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>
                  <TextField value={product?.nombreProducto || ""} onChange={(event) => handleTableEdit(event, "name")} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Descripción</TableCell>
                <TableCell>
                  <TextField value={product?.descripcion || ""} onChange={(event) => handleTableEdit(event, "description")} />
                </TableCell>
              </TableRow>
              {/* Add more table rows for other product details */}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cerrar
        </Button>
        <Button variant="contained" color="primary" onClick={handleSaveChanges}>
          Guardar Cambios
        </Button>
      </DialogActions>
    </Dialog>
  );
}

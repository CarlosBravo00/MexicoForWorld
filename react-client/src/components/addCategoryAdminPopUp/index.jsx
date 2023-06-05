import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

export default function AddCategoryDialog({ open, handleClose, handleConfirm }) {
  const [categoryName, setCategoryName] = useState("");

  const handleInputChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleCancel = () => {
    setCategoryName("");
    handleClose();
  };

  const handleConfirmClick = () => {
    handleConfirm(categoryName);
    setCategoryName("");
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Añadir Nueva Categoría</DialogTitle>
      <DialogContent>
        <TextField
          label="Nombre de Categoría"
          value={categoryName}
          onChange={handleInputChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancelar
        </Button>
        <Button variant="contained" color="primary" onClick={handleConfirmClick}>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

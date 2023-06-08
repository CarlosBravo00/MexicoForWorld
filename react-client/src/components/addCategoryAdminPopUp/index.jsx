import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

export default function AddCategoryDialog({
  open,
  handleClose,
  handleConfirm,
}) {
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
      <div style={{ padding: "20px 30px 20px 30px" }}>
        <DialogTitle>Add New Cateogry</DialogTitle>
        <DialogContent style={{ marginTop: "10px" }}>
          <TextField
            placeholder="Name"
            size="small"
            value={categoryName}
            onChange={handleInputChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions style={{ width: "90%" }}>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleConfirmClick}
          >
            Confirm
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
}

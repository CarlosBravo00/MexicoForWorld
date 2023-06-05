import React, { useState, useEffect } from "react";
import { Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { getProductsCall } from "../../services/apiCalls";
import EditProductDialog from "../../components/addProductAdminPopUp"
import "./style.css";

export default function AdminProductlist({ onLogout }) {
  const [products, setProducts] = useState([]);
  const [openDialog, setOpenDialog] = useState(false); // State for dialog visibility
  const [selectedProduct, setSelectedProduct] = useState(null);


  useEffect(() => {
    async function getProducts() {
      const data = await getProductsCall();
      setProducts(data);
    }
    
    getProducts();
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    onLogout();
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleTableEdit = (event, field) => {
    const { value } = event.target;
    setSelectedProduct((prevProduct) => ({
      ...prevProduct,
      [field]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Implement logic to save changes made in the dialog
    handleCloseDialog();
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h4">Productos</Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/AddProducts"
        >
          Añadir Nuevo Producto
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "16px" }}
          onClick={handleClick}
        >
          Logout
        </Button>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
        <TableContainer style={{ width: "75%" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Editar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.productId}>
                  <TableCell>{product.nombreProducto}</TableCell>
                  <TableCell>{product.descripcion}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" onClick={() => handleEditClick(product)}>
                      Editar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <EditProductDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        product={selectedProduct}
        handleTableEdit={handleTableEdit}
        handleSaveChanges={handleSaveChanges}
      />
    </>
  );
}

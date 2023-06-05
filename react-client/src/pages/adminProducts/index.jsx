import React, { useState, useEffect } from "react";
import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { getProductsCall } from "../../services/apiCalls";
import EditProductDialog from "../../components/editProductAdminPopUp";
import AddProductDialog from "../../components/addProductAdminPopUp";
import AddCategoryDialog from "../../components/addCategoryAdminPopUp";
import "./style.css";

export default function AdminProductlist({ onLogout }) {
  const [products, setProducts] = useState([]);
  const [openDialog, setOpenDialog] = useState(false); // State for dialog visibility
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openAddProductDialog, setOpenAddProductDialog] = useState(false);
  const [openAddCategoryDialog, setOpenAddCategoryDialog] = useState(false);

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

  const handleAddProduct = () => {
    setOpenAddProductDialog(true);
  };

  const handleAddCategory = () => {
    setOpenAddCategoryDialog(true);
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

  const handleCloseAddProductDialog = () => {
    setOpenAddProductDialog(false);
  };

  const handleDeleteClick = (product) => {
    // Implement logic for deleting the product
    console.log("Delete product:", product);
  };

  const handleAddCategoryConfirm = (categoryName) => {
    // Implement logic to add the new category
    console.log("New category name:", categoryName);
    setOpenAddCategoryDialog(false);
  };

  const handleAddCategoryCancel = () => {
    setOpenAddCategoryDialog(false);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h4">Productos</Typography>
        <div>
          <Button variant="contained" color="primary" onClick={handleAddProduct} style={{ marginLeft: "16px" }}>
            Añadir Nuevo Producto
          </Button>
          <Button variant="contained" color="primary" onClick={handleAddCategory} style={{ marginLeft: "16px" }}>
            Añadir Nueva Categoría
          </Button>
        </div>
        <Button variant="contained" color="primary" style={{ margin: "16px" }} onClick={handleClick}>
          Logout
        </Button>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
        <TableContainer style={{ width: "75%" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell> {/* Add this line */}
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.productId}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.nombreProducto}</TableCell>
                  <TableCell>{product.descripcion}</TableCell>
                  <TableCell>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <Button variant="contained" color="primary" onClick={() => handleEditClick(product)}>
                        Editar
                      </Button>
                      <Button variant="contained" color="secondary" onClick={() => handleDeleteClick(product)} style={{ color: "white", backgroundColor: "red" }}>
                        Borrar
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <AddProductDialog
        open={openAddProductDialog}
        handleClose={handleCloseAddProductDialog}
        product={null} // Pass null or an initial product object if needed
        handleTableEdit={handleTableEdit}
        handleSaveChanges={handleSaveChanges}
      />

      <AddCategoryDialog
        open={openAddCategoryDialog}
        handleClose={handleAddCategoryCancel}
        handleConfirm={handleAddCategoryConfirm}
      />

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


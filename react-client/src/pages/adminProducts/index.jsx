import React, { useState, useEffect } from "react";
import {
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import { getProductsCall } from "../../services/apiCalls";
import EditProductDialog from "../../components/editProductAdminPopUp";
import AddProductDialog from "../../components/addProductAdminPopUp";
import AddCategoryDialog from "../../components/addCategoryAdminPopUp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
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
      <div
        style={{
          paddingTop: "30px",
          paddingBottom: "30px",
          backgroundColor: "#282c34",
          marginBottom: "10px",
        }}
      >
        <Typography
          variant="h4"
          style={{ textAlign: "center", color: "#61dafb" }}
        >
          Portal Administrativo
        </Typography>
        <Button
          color="primary"
          style={{
            clear: "none",
            float: "right",
            marginTop: "-45px",
            marginRight: "20px",
            color: "#61dafb",
          }}
          onClick={handleClick}
        >
          Logout
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ justifySelf: "center", alignSelf: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddProduct}
            style={{ marginLeft: "16px" }}
          >
            Añadir Nuevo Producto
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddCategory}
            style={{ marginLeft: "16px" }}
          >
            Añadir Nueva Categoría
          </Button>
        </div>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}
      >
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
                      <IconButton
                        color="primary"
                        onClick={() => handleEditClick(product)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="secondary"
                        onClick={() => handleDeleteClick(product)}
                        style={{ color: "red" }}
                      >
                        <DeleteIcon />
                      </IconButton>
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

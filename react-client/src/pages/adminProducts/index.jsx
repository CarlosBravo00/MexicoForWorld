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
import AddProductDialog from "../../components/addProductAdminPopUp";
import AddCategoryDialog from "../../components/addCategoryAdminPopUp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./style.css";

export default function AdminProductlist({ onLogout }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openAddProductDialog, setOpenAddProductDialog] = useState(false);
  const [openAddCategoryDialog, setOpenAddCategoryDialog] = useState(false);

  async function getProducts() {
    const data = await getProductsCall();
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const handleLogout = (event) => {
    event.preventDefault();
    onLogout();
  };

  const handleAddProduct = () => {
    setSelectedProduct(null);
    setOpenAddProductDialog(true);
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setOpenAddProductDialog(true);
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
          onClick={handleLogout}
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
            onClick={() => {
              setOpenAddCategoryDialog(true);
            }}
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
      {openAddCategoryDialog && (
        <AddCategoryDialog
          open={openAddCategoryDialog}
          handleClose={() => setOpenAddCategoryDialog(false)}
          handleConfirm={handleAddCategoryConfirm}
        />
      )}
      {openAddProductDialog && (
        <AddProductDialog
          open={openAddProductDialog}
          product={selectedProduct}
          isEdit={selectedProduct ? true : false}
          handleClose={() => setOpenAddProductDialog(false)}
          handleConfirm={() => {
            setOpenAddProductDialog(false);
            getProducts();
          }}
        />
      )}
    </>
  );
}

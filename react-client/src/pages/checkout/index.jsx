import React, { useState } from "react";
import { addOrderCall } from "../../services/apiCalls";

import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

function CheckoutPage() {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handlePaypalEmailChange = (e) => {
    setPaypalEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realizar acciones adicionales, como enviar los datos a un servidor
    const id = localStorage.getItem("userId");
    async function createOrder() {
      try {
        const orderData = {
          cantidadProductos: 5,
          usuarioId: id,
        };

        const response = await addOrderCall(orderData);
        console.log("Orden creada:", response);
      } catch (error) {
        console.error("Error al crear la orden:", error);
      }
    }

    createOrder();

    // Reiniciar los campos del formulario
    setFullName("");
    setAddress("");
    setPaymentMethod("");
    setCardNumber("");
    setPaypalEmail("");
  };

  return (
    <div>
      <Typography variant="h4">Checkout</Typography>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel id="paymentMethod-label">Método de pago</InputLabel>
          <Select
            labelId="paymentMethod-label"
            id="paymentMethod"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            required
          >
            <MenuItem value="">Seleccionar</MenuItem>
            <MenuItem value="creditCard">Tarjeta de crédito</MenuItem>
            <MenuItem value="paypal">PayPal</MenuItem>
          </Select>
        </FormControl>
        {paymentMethod === "creditCard" && (
          <TextField
            label="Número de tarjeta"
            value={cardNumber}
            onChange={handleCardNumberChange}
            required
          />
        )}
        {paymentMethod === "paypal" && (
          <TextField
            label="Correo electrónico de PayPal"
            value={paypalEmail}
            onChange={handlePaypalEmailChange}
            required
          />
        )}
        <Button variant="contained" color="primary" type="submit">
          Realizar pago
        </Button>
      </form>
    </div>
  );
}

export default CheckoutPage;

import React, { useState } from "react";
import { useSnapshot } from "valtio";
import { Typography, TextField, Grid, Button } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import state from "../store";
import OrderItem from "./Order/OrderItem";
import { Link, Navigate  } from 'react-router-dom';
import "react-credit-cards/es/styles-compiled.css";
import Cards from "react-credit-cards";

const PlaceOrder = () => {
  const snap = useSnapshot(state);
    // Redirect to ProductList if cart is empty

  const getTotalPrice = () => {
    return snap.cart.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
  };
  const [formValues, setFormValues] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    cardHolderName: "",
    address: "",
  });

  const [errors, setErrors] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    cardHolderName: "",
    address: "",
  });

  const handleInputChange = (name, value) => {
    if (name === "cardNumber") {
      
      value = formatCardNumber(value);
    } else if (name === "cvc") {
      value = formatCVC(value);
    } else if (name === "expiryDate") {
      value = formatExpiryDate(value);
    }

    setFormValues({
      ...formValues,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  const formatCardNumber = (input) => {
    const value = input
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .substr(0, 16);
    const parts = [];

    for (let i = 0; i < value.length; i += 4) {
      parts.push(value.substr(i, 4));
    }

    return parts.join(" ");
  };
  const formatCVC = (input) => {
    return input
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .substr(0, 3);
  };

  const formatExpiryDate = (input) => {
    const value = input
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .substr(0, 4);
    const parts = [];

    for (let i = 0; i < value.length; i += 2) {
      parts.push(value.substr(i, 2));
    }

    return parts.join("/");
  };

  const handleOrderSubmit = () => {
    // Perform form validation here
    let formIsValid = true;
    const newErrors = {
      cardNumber: "",
      expiryDate: "",
      cvc: "",
      cardHolderName: "",
      address: "",
    };

    if (!/^\d{16}$/.test(formValues.cardNumber.replace(/\s+/g, ''))) {
      newErrors.cardNumber = 'Card number must be 16 digits.';
      formIsValid = false;
    }

    if (!/^\d{3}$/.test(formValues.cvc)) {
      newErrors.cvc = "CVV must be 3 digits.";
      formIsValid = false;
    }

    if (!/^\d{2}\/\d{2}$/.test(formValues.expiryDate)) {
      newErrors.expiryDate = "Expiry date must be in MM/YY format.";
      formIsValid = false;
    }

    if (formValues.cardHolderName.trim() === "") {
      newErrors.cardHolderName = "Card holder name is required.";
      formIsValid = false;
    }

    if (formValues.address.trim() === "") {
      newErrors.address = "Address is required.";
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      // Proceed with submitting the order
      // Your logic for submitting the order goes here
      console.log("Order submitted successfully!");
      window.location.replace('/OrderPlaced');
    }
  };

  if (snap.cart.length === 0) {
    return <Navigate to="/ProductList" />;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        margin: "50px auto",
        maxWidth: "calc(100vw - 100px)",
        flexWrap: "wrap",
      }}
    >
      <div style={{ width: "400px", marginRight: "20px" }}>
        <Typography variant="h5" gutterBottom>
          Personal Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* Use Cards component to display and auto-format the card number */}
            <Cards
              cvc={formValues.cvc}
              expiry={formValues.expiryDate}
              focused={formValues.focused}
              name={formValues.cardHolderName}
              number={formValues.cardNumber}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Card Number"
              fullWidth
              value={formValues.cardNumber}
              onChange={(e) => handleInputChange("cardNumber", e.target.value)}
              error={!!errors.cardNumber}
              helperText={errors.cardNumber}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="CVV"
              fullWidth
              value={formValues.cvc}
              onChange={(e) => handleInputChange("cvc", e.target.value)}
              error={!!errors.cvc}
              helperText={errors.cvc}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Expiry Date (MM/YY)"
              fullWidth
              value={formValues.expiryDate}
              onChange={(e) => handleInputChange("expiryDate", e.target.value)}
              error={!!errors.expiryDate}
              helperText={errors.expiryDate}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Card Holder Name"
              fullWidth
              value={formValues.cardHolderName}
              onChange={(e) =>
                handleInputChange("cardHolderName", e.target.value)
              }
              error={!!errors.cardHolderName}
              helperText={errors.cardHolderName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              fullWidth
              value={formValues.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              error={!!errors.address}
              helperText={errors.address}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
          onClick={handleOrderSubmit}
        >
          Submit Order
        </Button>
      </div>

      <div style={{ flex: 1, maxWidth: "800px", minWidth: "750px" }}>
        <Timeline position="left">
          {snap.cart.map((item, index) => (
            <TimelineItem key={index}>
              <Typography variant="h6">
                <div style={{ width: 30 }}></div> $
                {parseFloat(item.price * item.count).toFixed(2)}
              </Typography>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                {index < snap.cart.length && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <OrderItem item={item} />
              </TimelineContent>
            </TimelineItem>
          ))}

          <TimelineItem key={2}>
            <Typography variant="h6">
              {" "}
              {"  "}${getTotalPrice().toFixed(2)}
            </Typography>
            <TimelineSeparator>
              <TimelineDot color="primary" />
            </TimelineSeparator>
            <TimelineContent sx={{ width: 350, marginLeft: "80px" }}>
              <Typography variant="h6">Total</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default PlaceOrder;

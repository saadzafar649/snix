import React from "react";
import { useSnapshot } from "valtio";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import state from "../store";
import CartItem from "./../components/CartItem";

const Cart = () => {
  const snap = useSnapshot(state);

  const getTotalPrice = () =>
    snap.cart.reduce((total, item) => total + item.price * item.count, 0);

  // Check if the cart is empty
  if (snap.cart.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "300px" }}>
        <Typography variant="h6">Your cart is empty.</Typography>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
          >
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: `calc(100vw - 100px)`,
        margin: "100px auto",
        border: "1px solid #ccc",
        maxWidth: "700px",
        borderRadius: "10px", // Add rounded corners
        padding: "20px",
      }}
    >
      {snap.cart.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "calc(100vw - 100px)",
          marginTop: "20px",
        }}
      >
        <Typography variant="h6">
          Total Price: ${getTotalPrice().toFixed(2)}
        </Typography>
        {/* Use Link to navigate to PlaceOrder */}
        <Link to="/placeorder" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary">
            Place Order
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;

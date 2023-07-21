import React from "react";
import { Button, IconButton } from "@mui/material";
import { AddCircle, RemoveCircle, Delete } from "@mui/icons-material";
import { useSnapshot } from "valtio";
import state from "../store";

const CartItem = ({ item }) => {
  const snap = useSnapshot(state);

  const handleIncrement = () => {
    const updatedCart = snap.cart.map((cartItem) =>
      cartItem.name === item.name ? { ...cartItem, count: cartItem.count + 1 } : cartItem
    );
    state.cart = updatedCart;
  };

  const handleDecrement = () => {
    const updatedCart = snap.cart.map((cartItem) =>
      cartItem.name === item.name && cartItem.count > 1 ? { ...cartItem, count: cartItem.count - 1 } : cartItem
    );
    state.cart = updatedCart;
  };

  const handleRemove = () => {
    const updatedCart = snap.cart.filter((cartItem) => cartItem.name !== item.name);
    state.cart = updatedCart;
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
        width: "100%",
        maxWidth: "500px",
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: "100px",
          height: "100px",
          objectFit: "contain",
          margin: "20px",
        }}
      />
      <div>
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.count}</p>
      </div>
      <div>
        <IconButton onClick={handleIncrement}>
          <AddCircle />
        </IconButton>
        <IconButton onClick={handleDecrement} disabled={item.count === 1}>
          <RemoveCircle />
        </IconButton>
        <IconButton onClick={handleRemove}>
          <Delete />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;

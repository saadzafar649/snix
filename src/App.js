import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Home from "./Pages/Home"
import ProductList from "./Pages/ProductList";
import Cart from "./Pages/Cart";
import PlaceOrder from "./Pages/PlaceOrder";
import ThankYou from "./Pages/ThankYou";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgb(187, 58, 41)",
    },
    secondary: {
      main: "rgb(251, 231, 52)",
    },
  },
});

const App = () => {
  return (
    <div style={{ position: 'relative' }}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/PlaceOrder" element={<PlaceOrder />} />
          <Route path="ProductList" element={<ProductList />} />
          <Route path="OrderPlaced" element={<ThankYou />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;

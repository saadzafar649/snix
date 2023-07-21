import React, { useState } from "react";
import {
  TextField,
  IconButton,
  Box,
  Typography,
  Collapse,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ProductCard from "./../components/ProductCard";
import { TransitionGroup } from "react-transition-group";
import { useSnapshot } from "valtio";
import state from "../store";
import Toast from "../components/Toast";

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSearch = () => {
    console.log("Perform search...");
  };
  const handleToastClose = () => {
    setShowToast(false);
  };
  const shoeDetails = useSnapshot(state).shoeDetails;
  const cart = useSnapshot(state).cart;

  const filteredShoes = shoeDetails.filter((shoe) =>
    shoe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search Products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton color="primary" onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </Box>

      <TransitionGroup
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "100px",
          flexWrap: "wrap",
        }}
      >
        {filteredShoes.length > 0 ? (
          filteredShoes.map((shoe, index) => (
            <Collapse key={shoe.image}>
              <ProductCard
                shoe={index}
                key={index}
                image={shoe.image}
                price={shoe.price}
                name={shoe.name}
                rating={shoe.rating}
                numReviews={shoe.numReviews}
                setShowToast={setShowToast}
              />
            </Collapse>
          ))
        ) : (
          <Collapse key={filteredShoes.length == 0}>
            <Typography variant="h6" color="textSecondary">
              No products found
            </Typography>
          </Collapse>
        )}
      </TransitionGroup>
      <Toast
        open={showToast}
        onClose={handleToastClose}
        message="Item have been added to the cart"
      />
    </div>
  );
};

export default ProductList;

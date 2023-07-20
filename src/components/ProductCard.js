import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Button,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { useSnapshot } from "valtio";
import state from "../store";
import Toast from "./Toast";

const ProductCard = ({ shoe, image, price, name, rating, numReviews,setShowToast  }) => {
  const snap = useSnapshot(state);
  // const addToCart = useProxy(state).addToCart;
  const theme = useTheme();
  const [flip, setFlip] = useState(false);
  const shoeDetails = useSnapshot(state).shoeDetails;
  const addToCart = (shoe) => {
    const existingShoeIndex = state.cart.findIndex(
      (item) => item.name === shoe.name
    );

    if (existingShoeIndex !== -1) {
      state.cart[existingShoeIndex].count += 1;
    } else {
      state.cart = [...state.cart, { ...shoe, count: 1 }];
    }
    setShowToast(true); 
  };

  return (
    <Card
      sx={{ margin: 1, maxWidth: 200 }}
      onMouseEnter={() => setFlip(true)}
      onMouseLeave={() => setFlip(false)}
    >
      <CardMedia
        component="img"
        sx={{
          width: 200,
          height: 150,
          objectFit: "contain",
          display: "flex",
          justifyContent: "center",
        }}
        height="200"
        width="200"
        image={image}
        alt={name}
      />

      {!flip ? (
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
          }}
        >
          <Typography variant="h6" gutterBottom textAlign={"center"}>
            {name}
          </Typography>
          <Typography variant="body1" color="primary">
            ${price}
          </Typography>
          <Rating
            name={`${name}-rating`}
            value={rating}
            precision={0.5}
            readOnly
          />
          <Typography variant="body2" color="textSecondary">
            {numReviews} {numReviews === 1 ? "review" : "reviews"}
          </Typography>
        </CardContent>
      ) : (
        <CardContent
          sx={{
            height: "100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button onClick={() => addToCart(shoeDetails[shoe])}>
            Add to Cart
          </Button>
        </CardContent>
      )}
    </Card>
    
  );
};

export default ProductCard;

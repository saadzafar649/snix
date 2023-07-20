import { proxy } from "valtio";
import ShoeImage1 from "./../assets/1.png";
import ShoeImage2 from "./../assets/2.png";
import ShoeImage3 from "./../assets/3.png";
import ShoeImage4 from "./../assets/4.png";
import ShoeImage5 from "./../assets/5.png";
import ShoeImage6 from "./../assets/6.png";

const shoeDetails = [
  {
    image: ShoeImage1,
    price: 99.99,
    name: "Adidas UltraBoost",
    rating: 4.5,
    numReviews: 25,
  },
  {
    image: ShoeImage2,
    price: 79.99,
    name: "Nike Air Max 270",
    rating: 4.0,
    numReviews: 15,
  },
  {
    image: ShoeImage3,
    price: 89.99,
    name: "Puma Cali",
    rating: 3.8,
    numReviews: 10,
  },
  {
    image: ShoeImage4,
    price: 69.99,
    name: "Vans Old Skool",
    rating: 4.2,
    numReviews: 30,
  },
  {
    image: ShoeImage5,
    price: 109.99,
    name: "New Balance 990v5",
    rating: 4.7,
    numReviews: 50,
  },
  {
    image: ShoeImage6,
    price: 49.99,
    name: "Converse Chuck Taylor All Star",
    rating: 3.5,
    numReviews: 5,
  },
];

const state = proxy({
    cart: [],
    shoeDetails: shoeDetails,
    addToCart: (shoe) => {
      state.cart.push(shoe);
    },
});

export default state;

import { configureStore } from "@reduxjs/toolkit";
import products from "./products";
import cart from "./Cart";

const store = configureStore({
  reducer: {
    product: products.reducer,
    cart: cart,
  },
});

export default store;

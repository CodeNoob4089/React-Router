import { configureStore } from "@reduxjs/toolkit";
import products from "./products";

const store = configureStore({
  reducer: {
    product: products.reducer,
  },
});

export default store;

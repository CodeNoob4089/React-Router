import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "멋진 바지",
    cost: 20000,
    like: "100",
    options: ["28", "30", "32"],
  },
  {
    id: 2,
    name: "멋진 셔츠",
    cost: 10000,
    like: "200",
    options: ["small", "medium", "large"],
  },
  {
    id: 3,
    name: "멋진 신발",
    cost: 30000,
    like: "300",
    options: ["230", "240", "250", "260", "270"],
  },
];

let products = createSlice({
  name: "item",
  initialState: initialState,
  reducers: {
    sortdata: (state) => {
      state.sort((a, b) => a.cost - b.cost);
    },
    reset: () => {
      return initialState;
    },
  },
});

export const { sortdata, reset } = products.actions;
export default products;

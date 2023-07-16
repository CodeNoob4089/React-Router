import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "inboxitem",
  initialState: [],
  reducers: {
    addTocart: (state, action) => {
      // 아이템 식별을 위해 아이템 ID와 선택한 옵션을 포함한 식별자를 생성한다.
      const identifier = `${action.payload.id}-${action.payload.selectedOption}`;
      const existingitem = state.find((item) => item.identifier === identifier);

      if (existingitem) {
        existingitem.count++;
      } else {
        state.push({ ...action.payload, identifier, count: 1 });
      }
    },
    incrementItem: (state, action) => {
      const identifier = action.payload.identifier;
      const existingItem = state.find((item) => item.identifier === identifier);
      if (existingItem) {
        existingItem.count++;
      }
    },
    decrementItem: (state, action) => {
      const identifier = action.payload.identifier;
      const existingItem = state.find((item) => item.identifier === identifier);
      if (existingItem && existingItem.count > 0) {
        existingItem.count--;
      }
    },
    removeItem: (state, action) => {
      const identifier = action.payload.identifier;
      const index = state.findIndex((item) => item.identifier === identifier);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addTocart, incrementItem, decrementItem, removeItem } =
  cart.actions;
export default cart.reducer;

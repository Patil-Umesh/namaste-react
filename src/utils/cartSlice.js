import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cartPrice: null,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    addCartPrice: (state, action) => {
      state.cartPrice = action.payload;
    },
    removeItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart, addCartPrice } =
  cartSlice.actions;
export default cartSlice.reducer;

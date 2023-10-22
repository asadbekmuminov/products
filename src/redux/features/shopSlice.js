import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../data";

const initialState = {
  prodacts: storeData,
  amount: 0,
  total: 0,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    removeItem: (state, { payload }) => {
      state.prodacts = state.prodacts.filter(
        (item) => item.name !== payload.name
      );
    },
    incrementAmount: (state, { payload }) => {
      const item = state.prodacts.find((item) => item.name === payload.name);
      item.amount++;
    },
    decrementAmount: (state, { payload }) => {
      const item = state.prodacts.find((item) => item.name === payload.name);
      item.amount--;
    },
    updateTotal: (state) => {
      let total = 0;
      let amount = 0;
      state.prodacts.forEach((item) => {
        amount += item.amount;
        total += item.price * item.amount;
      });
      state.total = total;
      state.amount = amount;
    },
  },
});
export const { incrementAmount, decrementAmount, updateTotal, removeItem } =
  shopSlice.actions;
export default shopSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

 const cartSlice = createSlice({
  name: "cart",
  initialState: "hello",
  reducers: {},
});

export const cart = cartSlice.reducer;

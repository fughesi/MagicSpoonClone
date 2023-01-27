import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    sayHi: (state, { payload }) => {
      console.log("hi");
    },
  },
});

export const { sayHi } = themeSlice.actions;

export default themeSlice.reducer;

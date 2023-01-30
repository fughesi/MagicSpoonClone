import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  windowWidth: 0,
  blur: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    getWindowWidth: (state, { payload }) => {
      state.windowWidth = Number(payload);
    },
    blur: (state, { payload }) => {
      state.blur = !state.blur;
    },
  },
});

export const { getWindowWidth, blur } = themeSlice.actions;

export default themeSlice.reducer;

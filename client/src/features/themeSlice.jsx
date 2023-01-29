import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
  windowWidth: 0,
  // windowWidth: window.innerWidth,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    getWindowWidth: (state, { payload }) => {
      // window.addEventListener("resize", () => state.windowWidth);
      // useEffect(() => {
      //   return window.removeEventListener("resize", state.windowWidth);
      // }, [state.windowWidth]);
      state.windowWidth = payload;
    },
  },
});

export const { getWindowWidth } = themeSlice.actions;

export default themeSlice.reducer;

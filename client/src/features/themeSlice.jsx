import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  windowWidth: 0,
  darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
  cartReveal: false,
  loginReveal: false,
  navbarEngaged: false,
  blur: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    getWindowWidth: (state, { payload }) => {
      state.windowWidth = Number(payload);
    },
    setDarkMode: (state, { payload }) => {
      state.darkMode = !state.darkMode;

      const Doc = document.documentElement.style;

      if (state.darkMode === true) {
        Doc.setProperty("color-scheme", "dark");
      } else {
        Doc.setProperty("color-scheme", "light");
      }

      localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
    },
    blur: (state, { payload }) => {
      state.blur = !state.blur;
    },
    navbar: (state, { payload }) => {
      state.navbarEngaged = !state.navbarEngaged;
    },
    cartReveal: (state, { payload }) => {
      state.cartReveal = !state.cartReveal;
    },
    loginReveal: (state, { payload }) => {
      state.loginReveal = !state.loginReveal;
    },
  },
});

export const { getWindowWidth, setDarkMode, blur, navbar, cartReveal, loginReveal } = themeSlice.actions;

export default themeSlice.reducer;

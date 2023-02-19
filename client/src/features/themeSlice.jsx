import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  windowWidth: 0,
  darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
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
  },
});

export const { getWindowWidth, setDarkMode, blur, navbar } = themeSlice.actions;

export default themeSlice.reducer;

import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import authReducer from "./features/authSlice";
import themeReducer from "./features/themeSlice";
import cartReducer, { getTotals } from "./features/cartSlice";

import { testimonialsApi } from "./services/testimonialsApi";
import { productsApi } from "./services/productsApi";
import { cerealsApi } from "./services/cerealsApi";
import { usersApi } from "./services/usersApi";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    theme: themeReducer,
    [testimonialsApi.reducerPath]: testimonialsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [cerealsApi.reducerPath]: cerealsApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      testimonialsApi.middleware,
      cerealsApi.middleware,
      productsApi.middleware,
      usersApi.middleware
    ),
});

store.dispatch(getTotals());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

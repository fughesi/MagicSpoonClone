import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import cartReducer, { getTotals } from "./features/cartSlice";
import themeReducer from "./features/themeSlice";

import { testimonialsApi } from "./services/testimonialsApi";
import { cerealsApi } from "./services/cerealsApi";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    cart: cartReducer,
    [testimonialsApi.reducerPath]: testimonialsApi.reducer,
    [cerealsApi.reducerPath]: cerealsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(testimonialsApi.middleware, cerealsApi.middleware),
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

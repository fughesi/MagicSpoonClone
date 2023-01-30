import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
  totalCartAmount: 0,
  totalCartQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      const indexedItem = state.items.findIndex((i) => i.id === payload.id);

      if (indexedItem >= 0) {
        state.items[indexedItem].quantity += 1;
      } else {
        const updatedItems = { ...payload, quantity: 1 };
        state.items.push(updatedItems);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    decrementItemQuantity: (state, { payload }) => {
      const indexedItem = state.items?.findIndex((i) => i.id === payload.id);

      const indexed = state.items[indexedItem];

      if (indexed?.quantity > 1) {
        indexed.quantity -= 1;
      } else {
        const deletedItems = state.items?.filter((i) => {
          return i.id !== payload.id;
        });

        state.items = deletedItems;
      }

      localStorage.removeItem("cartItems");

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    incrementItemQuantity: (state, { payload }) => {
      const indexedItem = state.items.findIndex((i) => i.id === payload.id);

      if (state.items[indexedItem]) {
        state.items[indexedItem].quantity += 1;
      }

      localStorage.removeItem("cartItems");

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    deleteItemFromCart: (state, { payload }) => {
      const deletedItems = state.items?.filter((i) => {
        return i.id !== payload.id;
      });

      state.items = deletedItems;

      localStorage.removeItem("cartItems");

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    clearCart: (state, { payload }) => {
      state.items = [];

      localStorage.removeItem("cartItems");
    },
    getTotals: (state, { payload }) => {
      const { totalSum, cartQuantity } = state.items?.reduce(
        (total, current) => {
          const { price, quantity } = current;
          let multiply = price * quantity;

          total.totalSum += multiply;
          total.cartQuantity += quantity;
          return total;
        },
        {
          totalSum: 0,
          cartQuantity: 0,
        }
      );

      state.totalCartAmount = totalSum;
      state.totalCartQuantity = cartQuantity;
    },
  },
});

export const { addItemToCart, decrementItemQuantity, incrementItemQuantity, deleteItemFromCart, clearCart, getTotals } =
  cartSlice.actions;

export default cartSlice.reducer;

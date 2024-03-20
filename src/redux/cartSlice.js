import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  carts: fetchFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
  updateCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let isItemCart = state.carts.find(
        (item) => item.id === action.payload.id
      );

      if (isItemCart) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity;
            return {
              ...item,
              quantity: tempQty,
            };
          } else return item;
        });
        state.carts = tempCart;
        storeInLocalStorage(state.carts);
        state.updateCart = true;
      } else {
        state.carts.push(action.payload);
        storeInLocalStorage(state.carts);
        state.updateCart = true;
      }
    },
    increment: (state, action) => {
      const tempCart = state.carts.map((item) => {
        if (item.id === action.payload.id) {
          let tempQty = item.quantity + 1;
          return {
            ...item,
            quantity: tempQty,
          };
        } else return item;
      });
      state.carts = tempCart;
      storeInLocalStorage(state.carts);
      state.updateCart = true;
    },
    decrement: (state, action) => {
      const tempCart = state.carts.map((item) => {
        if (item.id === action.payload.id) {
          let tempQty = item.quantity - 1;
          return {
            ...item,
            quantity: tempQty,
          };
        } else return item;
      });
      state.carts = tempCart;
      storeInLocalStorage(state.carts);
      state.updateCart = true;
    },
    removeFromCart: (state, action) => {
      let tempCart = state.carts.filter((item) => item.id !== action.payload);
      state.carts = tempCart;
      storeInLocalStorage(state.carts);
      state.updateCart = true;
    },
    clearCart: (state, action) => {
      state.carts = [];
      storeInLocalStorage(state.carts);
      state.updateCart = true;
    },
    getCartTotal: (state) => {
      state.totalAmount =
        Math.round(
          state.carts.reduce((cartTotal, cartItem) => {
            return (cartTotal += cartItem.price * cartItem.quantity);
          }, 0) * 100
        ) / 100;
      state.itemCount = state.carts.length;
      state.updateCart = false;
    },
  },
});

export const {
  addToCart,
  increment,
  decrement,
  removeFromCart,
  clearCart,
  getCartTotal,
} = cartSlice.actions;
export default cartSlice.reducer;

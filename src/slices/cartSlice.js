import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const foundItem =
        state.length > 0
          ? state.find((item) => item.product.id === action.payload.id)
          : null;
      if (!foundItem) {
        return [...state, { product: action.payload, quantity: 1 }];
      } else if (foundItem.quantity < action.payload.quantity) {
        return state.map((item) =>
          item.product.id === foundItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else
        toast.warning(
          `You can not add more than ${action.payload.quantity} items of this product`
        );
    },
    deleteFromCart: (state, action) => {
      toast.success(`${action.payload.name} deleted from cart`);
      return state.filter((item) => item.product.id !== action.payload);
    },
    increment: (state, action) => {
      const foundItem = state.find(
        (item) => item.product.id === action.payload.product.id
      );

      if (foundItem && foundItem.quantity < action.payload.product.quantity) {
        return state.map((item) =>
          item.product.id === action.payload.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else
        toast.error(
          `You can not add more than ${action.payload.product.quantity} items of this product`
        );
      return state;
    },

    decrement: (state, action) => {
      toast.success(`Product quantity decresed`);
      return state.map((item) =>
        item.product.id === action.payload.product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    },
  },
});

export const { increment, decrement, addToCart, deleteFromCart } =
  cartSlice.actions;
export const selectCount = (state) => state.cart;

export default cartSlice.reducer;

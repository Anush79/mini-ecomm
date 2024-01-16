import { combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./slices/cartSlice";
import filtersReducer from "./slices/filterSlice";
import productReducer from "./slices/productSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  filters: filtersReducer,
  products: productReducer
});

export default rootReducer;

import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileSlice";
import productReducer from './productsSlice'; 
import cartReducer from './cartSlice'

const store = configureStore({
  reducer: {
    profile: profileReducer,
    product: productReducer, 
    cart: cartReducer
  },
});

export default store;
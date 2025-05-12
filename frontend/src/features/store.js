import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import productSlice from "./product/productSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice,
  },
});

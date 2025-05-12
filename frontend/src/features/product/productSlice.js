import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../api";

const initialState = {
  products: [],
  cart: [],
};

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (data) => {
    try {
      let url = "/products";
      if (data) {
        url += `?designation=${data}`;
      }
      const res = await http.get(url);
      return res.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);
export const getProduct = createAsyncThunk("product/getProduct", async (id) => {
  try {
    let url = `/products/${id}`;
    const res = await http.get(url);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
});
export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (data) => {
    try {
      let url = "/products";
      const res = await http.post(url, data);
      return res.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);
export const editProduct = createAsyncThunk(
  "product/editProduct",
  async (fd) => {
    try {
      let url = `/products/${fd.id}`;
      const res = await http.put(url, fd);
      return res.fd;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    try {
      let url = `/products/${id}`;
      const res = await http.delete(url);
      return res.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const p = state.cart.find((p) => p._id === product._id);
      if (p) {
        p.quantity += 1;
      } else {
        product.quantity = 1;
        state.cart.push(product);
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
    removeProduct: (state, action) => {
      const product = action.payload;
      const index = state.cart.findIndex((p) => p._id === product._id);
      state.cart.splice(index, 1);
    },
    incrementProduct: (state, action) => {
      const product = action.payload;
      const p = state.cart.find((p) => p._id === product._id);
      p.quantity += 1;
    },
    decremenProduct: (state, action) => {
      const product = action.payload;
      const p = state.cart.find((p) => p._id === product._id);
      if (p.quantity > 1) {
        p.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  clearCart,
  removeProduct,
  incrementProduct,
  decremenProduct,
} = productSlice.actions;
export default productSlice.reducer;

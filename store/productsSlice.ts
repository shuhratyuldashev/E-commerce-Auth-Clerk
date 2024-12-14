import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Product {
  id: number;
  linkId: number; 
  name: string;
  img: string;
  description: string;
  price: number;
}

interface ProductState {
  products: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  cart: Product[];
  selectedCategory: number | null;
}

const initialState: ProductState = {
  products: [],
  status: 'idle',
  error: null,
  cart: [],
  selectedCategory: null
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3000/api/products");
      const data = response.data
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message || 'Unknown error occurred');
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      if (!state.cart.some(product => product.linkId === action.payload.linkId)) {
        state.cart.push(action.payload);
      }
    },removeFromCart(state, action: PayloadAction<number>) {
      console.log('Removing product with linkId:', action.payload);
      state.cart = state.cart.filter(product => {
        console.log('Checking product with linkId:', product.linkId);
        return product.linkId !== action.payload;
      });
    },selectCategory(state, action: PayloadAction<number | null>) {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  }
});

export const { addToCart, removeFromCart, selectCategory } = productSlice.actions;
export default productSlice.reducer;
// src/redux/productsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductsFromAPI } from '../services/productService'; // Assume this service fetches products

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetchProductsFromAPI();
    return response.data; // Adjust based on your actual API response structure
  },
);

const initialState = {
  products: [],
  status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;

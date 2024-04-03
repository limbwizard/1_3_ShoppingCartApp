// src/redux/cartSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as cartService from '../services/cartService';
import { CartItem, CartState } from '../types/cartTypes';

// Define initial state with types
const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  status: 'idle',
  error: null,
};

// Async actions corrected
export const fetchCartItems = createAsyncThunk<CartItem[]>(
  'cart/fetchItems',
  async () => {
    // Directly return the result from the service without `.data`
    const items = await cartService.getCartItems();
    return items; // items is directly CartItem[], no need for .data
  },
);

export const addItem = createAsyncThunk<CartItem, CartItem>(
  'cart/addItem',
  async (item) => {
    // Directly return the result from the service without `.data`
    const newItem = await cartService.addItemToCart(item);
    return newItem; // newItem is directly CartItem, no need for .data
  },
);

export const removeItem = createAsyncThunk<string, string>(
  'cart/removeItem',
  async (itemId) => {
    // Directly return the itemId without assigning or using `response`
    await cartService.removeItemFromCart(itemId);
    return itemId;
  },
);

export const updateItemQuantity = createAsyncThunk<
  CartItem,
  { itemId: string; quantity: number }
>('cart/updateItemQuantity', async ({ itemId, quantity }) => {
  const updatedItem = await cartService.updateItemQuantity(itemId, quantity);
  return updatedItem; // updatedItem is directly CartItem, no need for .data
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.totalQuantity = action.payload.reduce(
          (total, item) => total + item.quantity,
          0,
        );
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.totalQuantity += action.payload.quantity;
      })
      .addCase(removeItem.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(updateItemQuantity.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id,
        );
        if (index !== -1) {
          state.items[index].quantity = action.payload.quantity;
        }
      });
  },
});

export default cartSlice.reducer;

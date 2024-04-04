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

export const fetchCartItems = createAsyncThunk<
  CartItem[],
  void,
  { rejectValue: string }
>('cart/fetchItems', async (_, { rejectWithValue }) => {
  try {
    const items = await cartService.getCartItems();
    return items;
  } catch (error) {
    return rejectWithValue('Failed to fetch cart items');
  }
});

export const addItem = createAsyncThunk<
  CartItem,
  CartItem,
  { rejectValue: string }
>('cart/addItem', async (item, { rejectWithValue }) => {
  try {
    const newItem = await cartService.addItemToCart(item);
    return newItem;
  } catch (error) {
    return rejectWithValue('Failed to add item to cart');
  }
});

export const removeItem = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('cart/removeItem', async (itemId, { rejectWithValue }) => {
  try {
    await cartService.removeItemFromCart(itemId);
    return itemId;
  } catch (error) {
    return rejectWithValue('Failed to remove item from cart');
  }
});

export const updateItemQuantity = createAsyncThunk<
  CartItem,
  { itemId: string; quantity: number },
  { rejectValue: string }
>(
  'cart/updateItemQuantity',
  async ({ itemId, quantity }, { rejectWithValue }) => {
    try {
      const updatedItem = await cartService.updateItemQuantity(
        itemId,
        quantity,
      );
      return updatedItem;
    } catch (error) {
      return rejectWithValue('Failed to update item quantity');
    }
  },
);

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
        state.error = action.payload || 'Failed to fetch cart items';
      })
      .addCase(addItem.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to add item to cart';
      })
      .addCase(removeItem.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to remove item from cart';
      })
      .addCase(updateItemQuantity.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to update item quantity';
      });
  },
});

export default cartSlice.reducer;

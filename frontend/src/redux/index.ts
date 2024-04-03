// redux/index.js
import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
// Import other slices

export const rootReducer = combineReducers({
  cart: cartReducer,
  // other reducers go here
});

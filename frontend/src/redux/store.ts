// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
// other imports

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // other reducers
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

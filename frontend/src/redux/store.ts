// store.ts
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// Import the authReducer
import authReducer from './authSlice'; // Adjust the path as necessary to match your file structure
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer, // Add the auth reducer here
    // other reducers can be added in a similar manner
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

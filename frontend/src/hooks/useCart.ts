// src/hooks/useCart.ts
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store'; // Adjust the import path as needed
import {
  fetchCartItems,
  addItem,
  removeItem,
  updateItemQuantity,
} from '../redux/cartSlice';
import { CartItem } from '../types/cartTypes'; // Import the CartItem type

export const useCart = () => {
  const dispatch = useDispatch<AppDispatch>(); // Use AppDispatch type here
  const cart = useSelector((state: RootState) => state.cart);

  const loadCartItems = useCallback(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  // Specify the type of 'item' as CartItem
  const addToCart = useCallback(
    (item: CartItem) => {
      dispatch(addItem(item));
    },
    [dispatch],
  );

  // Specify the type of 'itemId' as string
  const removeFromCart = useCallback(
    (itemId: string) => {
      dispatch(removeItem(itemId));
    },
    [dispatch],
  );

  // Specify types for both 'itemId' and 'quantity'
  const updateQuantity = useCallback(
    (itemId: string, quantity: number) => {
      dispatch(updateItemQuantity({ itemId, quantity }));
    },
    [dispatch],
  );

  return {
    cart,
    loadCartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
  };
};

// src/services/cartService.ts
import axios from 'axios';
import { CartItem } from '../types/cartTypes';

const BASE_URL = 'https://your-backend-url.com/api/cart';

// Adjust the return type based on the actual structure of your API response.
// Here, we assume it returns an array of CartItem objects for getCartItems.
const getCartItems = async (): Promise<CartItem[]> => {
  const response = await axios.get<CartItem[]>(`${BASE_URL}/items`);
  return response.data;
};

// Ensure the item parameter type matches what your API expects for a new cart item.
// The response is assumed to be of type CartItem, adjust as necessary.
const addItemToCart = async (item: CartItem): Promise<CartItem> => {
  const response = await axios.post<CartItem>(`${BASE_URL}/add`, item);
  return response.data;
};

// Assuming the API returns the id of the removed item or some other response.
// Adjust the return type based on your actual API response.
const removeItemFromCart = async (itemId: string): Promise<{ id: string }> => {
  const response = await axios.delete<{ id: string }>(
    `${BASE_URL}/remove/${itemId}`,
  );
  return response.data;
};

// Assuming the API returns the updated CartItem.
// Adjust the types as necessary based on your actual API response.
const updateItemQuantity = async (
  itemId: string,
  quantity: number,
): Promise<CartItem> => {
  const response = await axios.put<CartItem>(`${BASE_URL}/update`, {
    itemId,
    quantity,
  });
  return response.data;
};

export { getCartItems, addItemToCart, removeItemFromCart, updateItemQuantity };

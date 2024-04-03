import axios from 'axios';
import { CartItem } from '../types/cartTypes'; // Adjust import path as needed

// Assuming the CartItem interface includes properties you'd expect from a product
// Adjust the BASE_URL to match your API's endpoint
const BASE_URL = 'https://your-api-endpoint.com/api/products';

const fetchProductsFromAPI = async (): Promise<CartItem[]> => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data; // Adjust this if your API's response structure is different
  } catch (error) {
    // Handle or throw the error based on your error handling policy
    throw new Error('Fetching products failed');
  }
};

// Placeholder for adding a new product
const addProductToAPI = async (product: CartItem): Promise<CartItem> => {
  try {
    const response = await axios.post(`${BASE_URL}`, product);
    return response.data;
  } catch (error) {
    throw new Error('Adding product failed');
  }
};

// Placeholder for updating an existing product
const updateProductInAPI = async (product: CartItem): Promise<CartItem> => {
  try {
    const response = await axios.put(`${BASE_URL}/${product.id}`, product);
    return response.data;
  } catch (error) {
    throw new Error('Updating product failed');
  }
};

// Placeholder for deleting a product
const deleteProductFromAPI = async (productId: string): Promise<void> => {
  try {
    await axios.delete(`${BASE_URL}/${productId}`);
  } catch (error) {
    throw new Error('Deleting product failed');
  }
};

export {
  fetchProductsFromAPI,
  addProductToAPI,
  updateProductInAPI,
  deleteProductFromAPI,
};

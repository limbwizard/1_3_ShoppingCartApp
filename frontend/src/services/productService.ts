// src/services/productService.ts
import axios from 'axios';
import { Product } from '../types/productTypes';

const BASE_URL = 'https://your-api-endpoint.com/api/products';

const fetchProductsFromAPI = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    throw new Error('Fetching products failed');
  }
};

// Placeholder for adding a new product
const addProductToAPI = async (product: Product): Promise<Product> => {
  try {
    const response = await axios.post(`${BASE_URL}`, product);
    return response.data;
  } catch (error) {
    throw new Error('Adding product failed');
  }
};

// Placeholder for updating an existing product
const updateProductInAPI = async (product: Product): Promise<Product> => {
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

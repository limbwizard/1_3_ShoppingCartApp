// src/types/cartTypes.ts
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalQuantity: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

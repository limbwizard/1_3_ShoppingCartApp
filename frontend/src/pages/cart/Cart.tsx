// Cart.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCartItems,
  removeItem,
  updateItemQuantity,
} from '../../redux/cartSlice';
import CartItem from './CartItem';
import './cart.scss';
import { RootState, AppDispatch } from '../../redux/store';

const Cart = () => {
  const dispatch: AppDispatch = useDispatch();
  const { items, totalQuantity, status, error } = useSelector(
    (state: RootState) => state.cart,
  );

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  const handleIncreaseQuantity = (itemId: string) => {
    const item = items.find((item) => item.id === itemId);
    if (item) {
      dispatch(updateItemQuantity({ itemId, quantity: item.quantity + 1 }));
    }
  };

  const handleDecreaseQuantity = (itemId: string) => {
    const item = items.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
      dispatch(updateItemQuantity({ itemId, quantity: item.quantity - 1 }));
    }
  };

  const handleRemoveItem = (itemId: string) => {
    dispatch(removeItem(itemId));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncreaseQuantity={() => handleIncreaseQuantity(item.id)}
              onDecreaseQuantity={() => handleDecreaseQuantity(item.id)}
              onRemoveItem={() => handleRemoveItem(item.id)}
            />
          ))}
          <div className="cart-summary">
            <h3>Total Items: {totalQuantity}</h3>
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

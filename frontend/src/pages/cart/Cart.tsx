// Cart.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from '../redux/cartSlice'; // Import actions from your cart slice or equivalent
import { CartItem } from './CartItem'; // Component for displaying individual cart items
import './cart/cart.scss'; // Assuming a CSS/SCSS module structure

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Access cart items from your Redux store or similar
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncreaseQuantity={() => handleIncreaseQuantity(item.id)}
              onDecreaseQuantity={() => handleDecreaseQuantity(item.id)}
              onRemoveItem={() => handleRemoveItem(item.id)}
            />
          ))}
          <div className="cart-summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

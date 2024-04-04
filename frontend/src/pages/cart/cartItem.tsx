// CartItem.tsx
import React from 'react';
import { CartItem as CartItemType } from '../../types/cartTypes';
import './CartItem.scss';

interface CartItemProps {
  item: CartItemType;
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
  onRemoveItem: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveItem,
}) => {
  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>${item.price.toFixed(2)}</p>
        <div className="quantity-controls">
          <button onClick={onDecreaseQuantity} disabled={item.quantity === 1}>
            -
          </button>
          <span>{item.quantity}</span>
          <button onClick={onIncreaseQuantity}>+</button>
        </div>
        <button onClick={onRemoveItem} className="remove-item-button">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;

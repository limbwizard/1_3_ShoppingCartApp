// CartItem.tsx
import React from 'react';
import './cartItem.scss'; // Assuming CSS/SCSS module structure

const CartItem = ({
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
          <button onClick={onDecreaseQuantity}>-</button>
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

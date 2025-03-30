import React from 'react';
import './CartItem.css';

export interface CartItemProps {
  name: string;
}

const CartItem: React.FC<CartItemProps> = ({ name }) => {
  return (
    <div className="cart-item">
      <div className="name">{name}</div>
      <button className="delete-button">Delete</button>
    </div>
  );
};

export default CartItem;
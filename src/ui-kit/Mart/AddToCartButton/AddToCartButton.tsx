import React from 'react';
import './AddToCartButton.css';

export interface AddToCartButtonProps {
  count: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ count }) => {
  if (count === 0) {
    return <button className="add-to-cart-button">Add to Cart</button>;
  } else {
    return (
      <div className="cart-item-count">
        <button className="decrement-button">-</button>
        <input type="number" value={count} readOnly />
        <button className="increment-button">+</button>
      </div>
    );
  }
};

export default AddToCartButton;
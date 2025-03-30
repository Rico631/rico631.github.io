import React from 'react';
import './ProductDetails.css';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

export interface ProductDetailsProps {
  price: number;
  image: string;
  name: string;
  description: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ price, image, name, description }) => {
  return (
    <div className="product-details">
      <img src={image} alt={name} />
      <div className="price">{price}</div>
      <div className="name">{name}</div>
      <div className="description">{description}</div>
      <AddToCartButton count={0} />
    </div>
  );
};

export default ProductDetails;
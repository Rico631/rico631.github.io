import React from 'react';
import './ProductSummary.css';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

export interface ProductSummaryProps {
  price: number;
  image: string;
  name: string;
  description: string;
}

const renderProductDetails = ({ price, image, name, description }: ProductSummaryProps) => (
  <>
    <img src={image} alt={name} />
    <div className="price">{price}</div>
    <div className="name">{name}</div>
    <div className="description">
      {description.slice(0, 50)}{description.length > 50 ? '...' : ''}
    </div>
  </>
);

const ProductSummary: React.FC<ProductSummaryProps> = ({ price, image, name, description }) => {
  return (
    <div className="product-summary">
      {renderProductDetails({ price, image, name, description })}
      <AddToCartButton count={0} />
    </div>
  );
};

export default ProductSummary;
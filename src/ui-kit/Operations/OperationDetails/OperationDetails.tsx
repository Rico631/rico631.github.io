import React from 'react';
import './OperationDetails.css';

export interface OperationDetailsProps {
  amount: number;
  category: string;
  name: string;
  description: string;
  date: string;
}

const OperationDetails: React.FC<OperationDetailsProps> = ({ amount, category, name, description, date }) => {
  return (
    <div className="operation-details">
      <div className="amount">{amount}</div>
      <div className="category">{category}</div>
      <div className="name">{name}</div>
      <div className="description">{description}</div>
      <div className="date">{date}</div>
      <button className="edit-button">Edit</button>
    </div>
  );
};

export default OperationDetails;

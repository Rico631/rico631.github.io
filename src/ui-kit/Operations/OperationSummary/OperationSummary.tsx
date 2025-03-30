import React from 'react';
import './OperationSummary.css';

export interface OperationSummaryProps {
  amount: number;
  category: string;
  name: string;
  description: string;
}

const OperationSummary: React.FC<OperationSummaryProps> = ({ amount, category, name, description }) => {
  return (
    <div className="operation-summary">
      <div className="amount">{amount}</div>
      <div className="category">{category}</div>
      <div className="name">{name}</div>
      <div className="description">{description.slice(0, 50)}{description.length > 50 ? '...' : ''}</div>
    </div>
  );
};

export default OperationSummary;
import { Meta, StoryObj } from '@storybook/react';
import ProductSummary, { ProductSummaryProps } from './ProductSummary';
import React from 'react';

const meta: Meta<typeof ProductSummary> = {
  title: 'Mart/ProductSummary',
  component: ProductSummary,
};

export default meta;

export const Default: StoryObj<typeof ProductSummary> = {
  render: (args: ProductSummaryProps) => <ProductSummary {...args} />,
  args: {
    price: 19.99,
    image: 'https://placehold.co/150',
    name: 'Sample Product',
    description: 'This is a sample product description.',
  },
};
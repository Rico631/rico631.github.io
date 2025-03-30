import { Meta, StoryObj } from '@storybook/react';
import ProductDetails, { ProductDetailsProps } from './ProductDetails';
import React from 'react';

const meta: Meta<typeof ProductDetails> = {
  title: 'Mart/ProductDetails',
  component: ProductDetails,
};

export default meta;

export const Default: StoryObj<typeof ProductDetails> = {
  render: (args: ProductDetailsProps) => <ProductDetails {...args} />,
  args: {
    price: 29.99,
    image: 'https://placehold.co/150',
    name: 'Detailed Product',
    description: 'This is a detailed product description.',
  },
};
import { Meta, StoryObj } from '@storybook/react';
import CartItem, { CartItemProps } from './CartItem';
import React from 'react';

const meta: Meta<typeof CartItem> = {
  title: 'Mart/CartItem',
  component: CartItem,
};

export default meta;

export const Default: StoryObj<typeof CartItem> = {
  render: (args: CartItemProps) => <CartItem {...args} />,
  args: {
    name: 'Sample Product in Cart',
  },
};
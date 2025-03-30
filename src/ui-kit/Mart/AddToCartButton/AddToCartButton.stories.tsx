import { Meta, StoryObj } from '@storybook/react';
import AddToCartButton, { AddToCartButtonProps } from './AddToCartButton';
import React from 'react';

const meta: Meta<typeof AddToCartButton> = {
  title: 'Mart/AddToCartButton',
  component: AddToCartButton,
};

export default meta;

export const Default: StoryObj<typeof AddToCartButton> = {
  render: (args: AddToCartButtonProps) => <AddToCartButton {...args} />,
  args: {
    count: 0,
  },
};

export const WithCount: StoryObj<typeof AddToCartButton> = {
  render: (args: AddToCartButtonProps) => <AddToCartButton {...args} />,
  args: {
    count: 3,
  },
};
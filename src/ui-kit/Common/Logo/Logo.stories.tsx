import { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';
import React from 'react';

const meta: Meta<typeof Logo> = {
  title: 'Common/Logo',
  component: Logo,
};

export default meta;

export const Default: StoryObj<typeof Logo> = {
  render: () => <Logo  />,
};

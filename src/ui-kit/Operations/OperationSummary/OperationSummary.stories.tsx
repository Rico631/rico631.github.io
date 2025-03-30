import { Meta, StoryObj } from '@storybook/react';
import OperationSummary, { OperationSummaryProps } from './OperationSummary';
import React from 'react';

const meta: Meta<typeof OperationSummary> = {
  title: 'Operations/OperationSummary',
  component: OperationSummary,
};

export default meta;

export const Default: StoryObj<typeof OperationSummary> = {
  render: (args: OperationSummaryProps) => <OperationSummary {...args} />,
  args: {
    amount: 100,
    category: 'Food',
    name: 'Lunch',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, ab ex, nulla repellat qui et soluta suscipit molestias tempora quis ad similique tenetur obcaecati dolores! Modi ratione provident maiores explicabo repudiandae placeat culpa eaque possimus rerum architecto. Voluptatum omnis possimus quod nam vel! Laboriosam nostrum, eos accusantium recusandae totam fugit maxime commodi accusamus. Corrupti, officiis.',
  },
};

import { Meta, StoryObj } from '@storybook/react';
import OperationDetails, { OperationDetailsProps } from './OperationDetails';
import React from 'react';

const meta: Meta<typeof OperationDetails> = {
  title: 'Operations/OperationDetails',
  component: OperationDetails,
};

export default meta;

export const Default: StoryObj<typeof OperationDetails> = {
  render: (args: OperationDetailsProps) => <OperationDetails {...args} />,
  args: {
    amount: 200,
    category: 'Transport',
    name: 'Bus Ticket',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, molestiae nemo! Libero dolores unde ratione reprehenderit exercitationem harum adipisci iusto accusantium dolor deserunt beatae minus, qui odio magni vero atque iure nostrum neque! Nulla blanditiis exercitationem ut, quas repudiandae consequatur, illum suscipit consectetur nihil, perferendis incidunt? Accusamus ad beatae nihil magnam hic consectetur id quae!',
    date: '2023-10-01',
  },
};

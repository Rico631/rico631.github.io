import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TestModal from './TestModal';

const meta : Meta<typeof TestModal> = {
  title: 'Other/TestModal',
  component: TestModal
}

export default meta;

export const Default: StoryObj<typeof TestModal> = {
  render: () => <TestModal />
}

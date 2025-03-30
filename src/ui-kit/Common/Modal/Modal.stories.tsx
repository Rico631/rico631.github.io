import { Meta, StoryObj } from '@storybook/react';
import Modal, { ModalProps } from './Modal';
import React from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Common/Modal',
  component: Modal,
  argTypes: {
    canClose: { action: 'canClose' },
    onClose: { action: 'onClose' },
  },
};

export default meta;

export const Default: StoryObj<typeof Modal> = {
  render: (args: ModalProps) => <Modal {...args} />,
  args: {
    canClose: () => true,
    children: <p>This is a modal content</p>,
  },
};

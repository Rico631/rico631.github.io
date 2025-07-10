import { Meta, StoryObj } from '@storybook/react';
import Modal, { ModalProps } from './Modal';
import React from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Common/Modal',
  component: Modal,
  argTypes: {
    onClose: { action: 'onClose' },
    isOpen: { control: 'boolean', defaultValue: true },
  },
};

export default meta;

export const Default: StoryObj<typeof Modal> = {
  render: (args: ModalProps) => <Modal {...args} />,
  args: {
    children: <p>This is a modal content</p>,
    isOpen: true,
  },
};

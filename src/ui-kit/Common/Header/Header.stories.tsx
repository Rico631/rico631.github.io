import { Meta, StoryObj } from "@storybook/react";
import Header, { HeaderProps } from "./Header";
import React from "react";

const meta: Meta<typeof Header> = {
  title: "Common/Header",
  component: Header,
};

export default meta;

export const Default: StoryObj<typeof Header> = {
  render: (args: HeaderProps) => <Header {...args} />,
  args: {
    children: (
      <h1>HEADER</h1>
    ),
  },
};
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import StorybookContainer from "../StorybookContainer/StorybookContainer";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Button {...args} />
    </StorybookContainer>
  ),
};

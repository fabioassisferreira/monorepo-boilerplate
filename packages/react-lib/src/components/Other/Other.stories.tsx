import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Other from "./Other";
import StorybookContainer from "../StorybookContainer/StorybookContainer";

const meta: Meta<typeof Other> = {
  title: "Other",
  component: Other,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Other>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Other {...args} />
    </StorybookContainer>
  ),
};

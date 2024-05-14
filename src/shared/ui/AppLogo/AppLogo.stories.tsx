import type { Meta, StoryObj } from "@storybook/react";
import { AppLogo } from "./AppLogo";

const meta = {
    title: "shared/AppLogo",
    component: AppLogo,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<AppLogo>;

type Story = StoryObj<AppLogo>;

export const Small: Story = {
    args: {},
};

export const Medium: Story = {
    args: {
        size: 100,
    },
};

export const Big: Story = {
    args: {
        size: 150,
    },
};

export default meta;

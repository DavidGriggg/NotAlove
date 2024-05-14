import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta = {
    title: "widgets/Header",
    component: Header,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Header>;

type Story = StoryObj<Header>;

export const Primary: Story = {
    args: {},
};

export default meta;

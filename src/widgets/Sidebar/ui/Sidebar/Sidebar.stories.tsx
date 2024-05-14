import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";

const meta = {
    title: "widgets/Sidebar",
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Sidebar>;

type Story = StoryObj<Sidebar>;

export const Primary: Story = {
    args: {
        style: { height: "500px !important" },
    },
};

export default meta;

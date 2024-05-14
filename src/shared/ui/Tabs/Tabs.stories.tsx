import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";
import { action } from "@storybook/addon-actions";

const meta = {
    title: "shared/Tabs",
    component: Tabs,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Tabs>;

type Story = StoryObj<Tabs>;

const tabs = [
    {
        value: "tab 1",
        content: "tab 1",
    },
    {
        value: "tab 2",
        content: "tab 2",
    },
    {
        value: "tab 3",
        content: "tab 3",
    },
];

export const Row: Story = {
    args: {
        tabs,
        value: "tab 2",
        onTabClick: action("onTabClick"),
    },
};

export const Column: Story = {
    args: {
        tabs,
        value: "tab 2",
        direction: "column",
        onTabClick: action("onTabClick"),
    },
};

export default meta;

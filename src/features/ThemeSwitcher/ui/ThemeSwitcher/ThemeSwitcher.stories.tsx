import type { Meta, StoryObj } from "@storybook/react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const meta = {
    title: "features/ThemeSwitcher",
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<ThemeSwitcher>;

type Story = StoryObj<ThemeSwitcher>;

export const Primary: Story = {
    args: {},
};

export default meta;

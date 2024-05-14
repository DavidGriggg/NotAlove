import type { Meta, StoryObj } from "@storybook/react";
import { LoadingPage } from "./LoadingPage";

const meta = {
    title: "pages/LoadingPage",
    component: LoadingPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<LoadingPage>;

type Story = StoryObj<LoadingPage>;

export const Primary: Story = {
    args: {},
};

export default meta;

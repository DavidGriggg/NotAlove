import type { Meta, StoryObj } from "@storybook/react";
import { ErrorPage } from "./ErrorPage";

const meta = {
    title: "pages/ErrorPage",
    component: ErrorPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<ErrorPage>;

type Story = StoryObj<ErrorPage>;

export const Primary: Story = {
    args: {},
};

export default meta;

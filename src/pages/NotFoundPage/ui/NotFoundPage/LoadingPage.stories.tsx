import type { Meta, StoryObj } from "@storybook/react";
import { NotFoundPage } from "./NotFoundPage";

const meta = {
    title: "pages/NotFoundPage",
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<NotFoundPage>;

type Story = StoryObj<NotFoundPage>;

export const Primary: Story = {
    args: {},
};

export default meta;

import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";

const meta = {
    title: "shared/Loader",
    component: Loader,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Loader>;

type Story = StoryObj<Loader>;

export const Light: Story = {};

export default meta;

import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";

const meta = {
    title: "shared/Skeleton",
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Skeleton>;

type Story = StoryObj<Skeleton>;

export const RectangleSmall: Story = {
    args: {
        width: 100,
        height: 50,
    },
};

export const RectangleMedium: Story = {
    args: {
        width: 300,
        height: 150,
    },
};

export const RectangleBig: Story = {
    args: {
        width: 600,
        height: 200,
    },
};

export const RectangleBordered: Story = {
    args: {
        width: 600,
        height: 200,
        borderRadius: "50px",
    },
};

export const CircleSmall: Story = {
    args: {
        borderRadius: "50%",
        width: 50,
        height: 50,
    },
};

export const CircleMedium: Story = {
    args: {
        borderRadius: "50%",
        width: 150,
        height: 150,
    },
};

export const CircleBig: Story = {
    args: {
        borderRadius: "50%",
        width: 300,
        height: 300,
    },
};

export default meta;

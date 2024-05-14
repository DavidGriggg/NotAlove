import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Text } from "@/shared/ui/Text";

const meta = {
    title: "shared/Card",
    component: Card,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Card>;

type Story = StoryObj<Card>;

export const Primary: Story = {
    args: {
        children: <Text title="some title" text="some text" />,
    },
};

export const Outlined: Story = {
    args: {
        children: <Text title="some title" text="some text" />,
        variant: "outlined",
    },
};

export const Light: Story = {
    args: {
        children: <Text title="some title" text="some text" />,
        variant: "light",
    },
};

export const Padding0: Story = {
    args: {
        children: <Text title="some title" text="some text" />,
        padding: "0",
    },
};

export const Padding8: Story = {
    args: {
        children: <Text title="some title" text="some text" />,
        padding: "8",
    },
};

export const Padding16: Story = {
    args: {
        children: <Text title="some title" text="some text" />,
        padding: "16",
    },
};

export const Padding24: Story = {
    args: {
        children: <Text title="some title" text="some text" />,
        padding: "24",
    },
};

export const BorderNormal: Story = {
    args: {
        children: <Text title="some title" text="some text" />,
        border: "normal",
    },
};

export const BorderRound: Story = {
    args: {
        children: <Text title="some title" text="some text" />,
        border: "round",
    },
};

export const BorderPartial: Story = {
    args: {
        children: <Text title="some title" text="some text" />,
        border: "partial",
    },
};

export default meta;

import type { Meta, StoryObj } from "@storybook/react";
import { Text as IText } from "./Text";

const meta = {
    title: "shared/Text",
    component: IText,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<IText>;

type Story = StoryObj<IText>;

export const Primary: Story = {
    args: {
        title: "Some title",
        text: "Some text Some text Some text",
    },
};

export const Bold: Story = {
    args: {
        title: "Some title",
        text: "Some text Some text Some text",
        bold: true,
    },
};

export const Error: Story = {
    args: {
        title: "Some title",
        text: "Some text Some text Some text",
        variant: "error",
    },
};

export const Accent: Story = {
    args: {
        title: "Some title",
        text: "Some text Some text Some text",
        variant: "accent",
    },
};

export const OnlyTitle: Story = {
    args: {
        title: "Some title",
    },
};

export const OnlyText: Story = {
    args: {
        text: "Some text Some text Some text",
    },
};

export const AlignLeft: Story = {
    args: {
        title: "Some title",
        text: "Some text Some text Some text",
    },
};

export const AlignRight: Story = {
    args: {
        title: "Some title",
        text: "Some text Some text Some text",
        align: "right",
    },
};

export const AlignCenter: Story = {
    args: {
        title: "Some title",
        text: "Some text Some text Some text",
        align: "center",
    },
};

export const SizeS: Story = {
    args: {
        title: "Some title",
        text: "Some text Some text Some text",
        size: "s",
    },
};

export const SizeM: Story = {
    args: {
        title: "Some title",
        text: "Some text Some text Some text",
        size: "m",
    },
};

export const SizeL: Story = {
    args: {
        title: "Some title",
        text: "Some text Some text Some text",
        size: "l",
    },
};

export default meta;

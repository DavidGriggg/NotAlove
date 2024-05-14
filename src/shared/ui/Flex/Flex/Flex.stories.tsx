import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./Flex";

const meta = {
    title: "shared/Flex",
    component: Flex,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Flex>;

type Story = StoryObj<Flex>;

const children = (
    <>
        <div>element</div>
        <div>element</div>
        <div>element</div>
        <div>element</div>
    </>
);

export const Row: Story = {
    args: {
        children,
    },
};

export const RowGap4: Story = {
    args: {
        gap: "4",
        children,
    },
};

export const RowGap8: Story = {
    args: {
        gap: "8",
        children,
    },
};

export const RowGap16: Story = {
    args: {
        gap: "16",
        children,
    },
};

export const RowGap32: Story = {
    args: {
        gap: "32",
        children,
    },
};

export const RowJustifyCenter: Story = {
    args: {
        gap: "4",
        justify: "center",
        children,
    },
};

export const RowJustifyEnd: Story = {
    args: {
        gap: "4",
        justify: "end",
        children,
    },
};

export const RowJustifyBetween: Story = {
    args: {
        gap: "4",
        justify: "between",
        children,
    },
};

export const Column: Story = {
    args: {
        align: "start",
        direction: "column",
        children,
    },
};

export const ColumnGap4: Story = {
    args: {
        align: "start",
        gap: "4",
        direction: "column",
        children,
    },
};

export const ColumnGap8: Story = {
    args: {
        align: "start",
        gap: "8",
        direction: "column",
        children,
    },
};

export const ColumnGap16: Story = {
    args: {
        align: "start",
        gap: "16",
        direction: "column",
        children,
    },
};

export const ColumnGap32: Story = {
    args: {
        align: "start",
        gap: "32",
        direction: "column",
        children,
    },
};

export const RowAlignCenter: Story = {
    args: {
        gap: "4",
        align: "center",
        direction: "column",
        children,
    },
};

export const RowAlignEnd: Story = {
    args: {
        gap: "4",
        align: "end",
        direction: "column",
        children,
    },
};

export default meta;

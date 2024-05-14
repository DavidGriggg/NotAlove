import type { Meta, StoryObj } from "@storybook/react";
import { ListBox, ListBoxItem } from "./ListBox";

const meta = {
    title: "shared/ListBox",
    component: ListBox,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 200 }}>
                <Story />
            </div>
        ),
    ],
} as Meta<ListBox>;

type Story = StoryObj<ListBox>;

const items: ListBoxItem<string>[] = [
    {
        value: "first",
        content: "1",
    },
    {
        value: "second",
        content: "2",
    },
    {
        value: "third",
        content: "3",
    },
];

export const Primary: Story = {
    args: {
        items,
        value: "first",
    },
};

export const TopLeft: Story = {
    args: {
        items,
        value: "first",
        direction: "top left",
    },
};

export const TopRight: Story = {
    args: {
        items,
        value: "first",
        direction: "top right",
    },
};

export const BottomLeft: Story = {
    args: {
        items,
        value: "first",
        direction: "bottom left",
    },
};

export const BottomRight: Story = {
    args: {
        items,
        value: "first",
        direction: "bottom right",
    },
};

export const Disabled: Story = {
    args: {
        items,
        value: "first",
        disabled: true,
    },
};

export const WithDisabledItem: Story = {
    args: {
        items: [
            {
                value: "first",
                content: "1",
            },
            {
                value: "second",
                content: "2",
                disabled: true,
            },
        ],
        value: "first",
    },
};

export const WithLabel: Story = {
    args: {
        items,
        value: "first",
        label: "choose",
    },
};

export default meta;

import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta = {
    title: "shared/Link",
    component: Link,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
} as Meta<Link>;

type Story = StoryObj<Link>;

export const Primary: Story = {
    args: {
        children: "Text",
    },
};

export const Red: Story = {
    args: {
        children: "Text",
        variant: "red",
    },
};

export const PrimaryWithTargetBlank: Story = {
    args: {
        children: "Text",
        variant: "primary",
        target: "_blank",
    },
};

export default meta;

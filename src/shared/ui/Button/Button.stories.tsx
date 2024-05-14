import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import ArrowIcon from "@/shared/assets/icons/arrow-bottom.svg";
import { Icon } from "@/shared/ui/Icon";

const meta = {
    title: "shared/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Button>;

type Story = StoryObj<Button>;

export const Outline: Story = {
    args: {
        children: "Text",
    },
};

export const Success: Story = {
    args: {
        children: "Text",
        color: "success",
    },
};

export const Error: Story = {
    args: {
        children: "Text",
        color: "error",
    },
};

export const Filled: Story = {
    args: {
        children: "Text",
        variant: "filled",
    },
};

export const Clear: Story = {
    args: {
        children: "Text",
        variant: "clear",
    },
};

export const FullWidth: Story = {
    args: {
        children: "Text",
        fullWidth: true,
    },
};

export const SizeL: Story = {
    args: {
        children: "Text",
        size: "l",
    },
};

export const SizeXL: Story = {
    args: {
        children: "Text",
        size: "xl",
    },
};

export const Disabled: Story = {
    args: {
        children: "Text",
        disabled: true,
    },
};

export const WithAddonLeft: Story = {
    args: {
        children: "Text",
        addonLeft: <Icon Svg={ArrowIcon} />,
    },
};

export const WithAddonRight: Story = {
    args: {
        children: "Text",
        addonRight: <Icon Svg={ArrowIcon} />,
    },
};

export default meta;

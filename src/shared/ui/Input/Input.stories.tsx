import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Icon } from "@/shared/ui/Icon";
import SearchIcon from "@/shared/assets/icons/search.svg";

const meta = {
    title: "shared/Input",
    component: Input,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Input>;

type Story = StoryObj<Input>;

export const Primary: Story = {
    args: {
        placeholder: "Type text",
        value: "314314",
    },
};

export const SizeS: Story = {
    args: {
        placeholder: "Type text",
        value: "314314",
        size: "s",
    },
};

export const SizeL: Story = {
    args: {
        placeholder: "Type text",
        value: "314314",
        size: "l",
    },
};

export const WithAutofocus: Story = {
    args: {
        placeholder: "Type text",
        value: "314314",
        autofocus: true,
    },
};

export const Readonly: Story = {
    args: {
        placeholder: "Type text",
        value: "314314",
        readOnly: true,
    },
};

export const WithAddonLeft: Story = {
    args: {
        placeholder: "Type text",
        value: "314314",
        addonLeft: <Icon Svg={SearchIcon} />,
    },
};

export const WithAddonRight: Story = {
    args: {
        placeholder: "Type text",
        value: "314314",
        addonRight: <Icon Svg={SearchIcon} />,
    },
};

export default meta;

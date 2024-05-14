import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import AvatarIcon from "@/shared/assets/icons/avatar.svg";

const meta = {
    title: "shared/Icon",
    component: Icon,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
} as Meta<Icon>;

type Story = StoryObj<Icon>;

export const Small: Story = {
    args: {
        Svg: AvatarIcon,
    },
};

export const Medium: Story = {
    args: {
        Svg: AvatarIcon,
        width: 50,
        height: 50,
    },
};

export const Big: Story = {
    args: {
        Svg: AvatarIcon,
        width: 100,
        height: 100,
    },
};

export default meta;

import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import AvatarImage from "@/shared/assets/images/avatar.webp";
import MissingAvatar from "@/shared/assets/icons/avatar.svg";

const meta = {
    title: "shared/Avatar",
    component: Avatar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
} as Meta<Avatar>;

type Story = StoryObj<Avatar>;

export const Small: Story = {
    args: {
        src: AvatarImage,
        size: 50,
    },
};

export const Medium: Story = {
    args: {
        src: AvatarImage,
    },
};

export const Big: Story = {
    args: {
        src: AvatarImage,
        size: 150,
    },
};

export const NoAvatar: Story = {
    args: {
        fallback: MissingAvatar,
        size: 100,
    },
};

export default meta;

import type { Meta, StoryObj } from "@storybook/react";
import { ProfileCard } from "./ProfileCard";
import AvatarImage from "@/shared/assets/images/avatar.webp";

const meta = {
    title: "entities/ProfileCard",
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<ProfileCard>;

type Story = StoryObj<ProfileCard>;

const data = {
    username: "hansen",
    age: 25,
    lastname: "Hansen",
    firstname: "Caroline",
    country: "ES",
    city: "Barcelona",
    avatar: AvatarImage,
};

export const Editing: Story = {
    args: {
        data,
    },
};

export const ReadOnly: Story = {
    args: {
        data,
        readOnly: true,
    },
};

export const Error: Story = {
    args: {
        error: "Some error",
    },
};

export const IsLoading: Story = {
    args: {
        isLoading: true,
    },
};

export default meta;

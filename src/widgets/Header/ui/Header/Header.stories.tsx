import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "widgets/Header",
    component: Header,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<Header>;

type Story = StoryObj<Header>;

export const NoAuth: Story = {
    args: {},
    decorators: [StoreDecorator({ user: { authData: undefined } })],
};

export const Auth: Story = {
    args: {},
    decorators: [
        StoreDecorator({ user: { authData: { id: "1", username: "david" } } }),
    ],
};

export default meta;

import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "features/LoginForm",
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<LoginForm>;

type Story = StoryObj<LoginForm>;

export const Primary: Story = {
    decorators: [
        StoreDecorator({ loginForm: { username: "admin", password: "123" } }),
    ],
};

export const IsLoading: Story = {
    decorators: [
        StoreDecorator({
            loginForm: {
                username: "david",
                password: "123",
                isLoading: true,
            },
        }),
    ],
};

export const Error: Story = {
    decorators: [
        StoreDecorator({
            loginForm: {
                username: "davidd",
                password: "123",
                error: "shared:auth.authIncorrect",
            },
        }),
    ],
};

export default meta;

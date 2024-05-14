import type { Meta, StoryObj } from "@storybook/react";
import { MainPageAsync as MainPage } from "./MainPage.async";

const meta = {
    title: "pages/MainPage",
    component: MainPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<MainPage>;

type Story = StoryObj<MainPage>;

export const Primary: Story = {
    args: {},
};

export default meta;

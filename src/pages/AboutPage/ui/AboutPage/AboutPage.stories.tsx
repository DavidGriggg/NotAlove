import type { Meta, StoryObj } from "@storybook/react";
import { AboutPageAsync as AboutPage } from "./AboutPage.async";

const meta = {
    title: "pages/AboutPage",
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta<AboutPage>;

type Story = StoryObj<AboutPage>;

export const Primary: Story = {
    args: {},
};

export default meta;

import type { Meta, StoryObj } from "@storybook/react";
import { CountrySelect } from "./CountrySelect";

const meta = {
    title: "entities/CountrySelect",
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
} as Meta<CountrySelect>;

type Story = StoryObj<CountrySelect>;

export const ReadOnly: Story = {
    args: {
        readOnly: true,
        value: "DE",
    },
};

export const Editable: Story = {
    args: {
        value: "DE",
    },
};

export default meta;
